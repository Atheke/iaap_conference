import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
  SendEmailCommandOutput,
} from "@aws-sdk/client-ses";

//this will be replaced with env variable
const REGION = "";
const AWS_ACCESS_KEY = "";
const AWS_SECRET_KEY = "";

const SES_CONFIG = {
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
  region: REGION,
};

// Create SES service object
const sesClient = new SESClient(SES_CONFIG);

type CreateSendEmailCommandType = {
  toAddress: string;
  fromAddress: string;
};

const createSendEmailCommand = ({
  toAddress,
  fromAddress,
}: CreateSendEmailCommandType): SendEmailCommand => {
  const params: SendEmailCommandInput = {
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: "<h1>HTML_FORMAT_BODY</h1>",
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "EMAIL_SUBJECT",
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [],
  };

  return new SendEmailCommand(params);
};

type RunResult = SendEmailCommandOutput | { error: string };

export const run = async ({
  toAddress,
  fromAddress,
}: CreateSendEmailCommandType): Promise<RunResult> => {
  const sendEmailCommand = createSendEmailCommand({ toAddress, fromAddress });

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (caught) {
    if (caught instanceof Error && caught.name === "MessageRejected") {
      const messageRejectedError =
        caught as import("@aws-sdk/client-ses").MessageRejected;
      return { error: messageRejectedError.message };
    }
    throw caught;
  }
};
