'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Notifications = () => {
	 const [showTable, setShowTable] = useState(false);
	 const [showInstructions, setShowInstructions] = useState(false);


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
					<Link 
					className="text-blue-500"
					href ="#" 					
					onClick={(e) => {
						e.preventDefault();
						setShowTable(!showTable);
					}}
					>
					here</Link>
					{" "}for registration fees after the 24th of January 2025.
</li>
					<li> Click{" "}
					<Link 
					className="text-blue-500"
					href ="#" 					
					onClick={(e) => {
						e.preventDefault();
						setShowInstructions(!showInstructions); 
					}}
					>
					here</Link>
					{" "}to find the instructions for poster presentations.</li>	

						<li>Delegates may not apply for an ILP if you can provide your invitation proof (abstract acceptance + registration confirmation) provided that you enter and leave the state within the time period of the conference.</li>

          </ul>

			{showTable && (
          <div className="mt-4 p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">Category</th>
                    <th className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">IAAP Members</th>
                    <th className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">Non IAAP Members</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">Faculty/Professional</td>
                    <td className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">4500</td>
                    <td className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">5500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">Students/Research Scholars</td>
                    <td className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">3000</td>
                    <td className="border border-gray-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">3500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
				{showInstructions && (
					<div className= "flex-col" >
						<ul className = " px-[2em]">
							<li>Poster dimensions: Max of 1m in width by 2m in height (portrait style)</li>
							<li>Participants must present their posters as a flex banner</li>
						</ul>
						<div className="mt-2 ml-[4em]">
							<div className="h-[80px] w-[40px] md:h-[140px] md:w-[80px] border border-blue-500">
								<div className="text-center">1m</div>
								<div className="mt-6">2m</div>
								<div></div>
							</div>
						</div>
					</div>
				)}
      </section>
    </div>
  );
};



export default Notifications;	
