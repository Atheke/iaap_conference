'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Notifications = () => {
	 const [showTable, setShowTable] = useState(false);

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
					<li>Please check{" "}
					<Link href ="#" 					
					className="text-blue-500"
					onClick={(e) => {
						e.preventDefault();
						setShowTable(!showTable);
					}}
					>
					here</Link>
					{" "}for registration fees after the 24th of January 2025.
</li>	
          </ul>

			{showTable && (
        <div className="mt-4 border border-gray-300 p-4">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Category</th>
                <th className="border border-gray-400 px-4 py-2">IAAP Members</th>
								<th className="border border-gray-400 px-4 py-2">Non IAAP Members</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Faculty/Professional</td>
                <td className="border border-gray-400 px-4 py-2">4500</td>
								<td className="border border-gray-400 px-4 py-2">5500</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Students/Research Scholars</td>
                <td className="border border-gray-400 px-4 py-2">3000</td>
								<td className="border border-gray-400 px-4 py-2">3500</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}	
				</section>
    </div>
  );
};
 
export default Notifications;
