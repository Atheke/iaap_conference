import React from 'react';

const Notifications = () => {
  return (
    <div className="w-full sm:my-10 container">
        <section className="text-sm sm:text-base lg:text-lg">
          <h2 className="text-3xl font-bold mb-4">Announcements</h2>
          <ul className="mt-4 list-disc list-inside">
            <li>RCI-CRE accreditation approved.</li>
            <li>Accommodation details have been updated. Please download the latest brochure for required information. All delegates must bear their own accomodation charges.</li>
            <li>All Non-Naga Indian (Domestic) delegates are required to apply for the Inner Line Permit (ILP). Permits are not required for foreign passport holders. 
								<p className="text-blue-500"><a href="https://ilp.nagaland.gov.in/" >Click here to apply</a></p>
							</li>
            <li>Submission of abstract deadline has been extended to the 31st of December.</li>
          </ul>
				</section>
    </div>
  );
};

export default Notifications;
