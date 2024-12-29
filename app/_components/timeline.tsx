import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      period: "Early Q1",
      milestone: "Initial market research completed; identified key pain points in the education sector.",
    },
    {
      period: "Late Q1",
      milestone: "Prototype of zClass and zTrail developed and tested with a small focus group.",
    },
    {
      period: "Early Q2",
      milestone: "Onboarded 3 pilot schools and 500 students for beta testing.",
    },
    {
      period: "Late Q2",
      milestone: "Secured seed funding of $100K; expanded zCommunity to connect students and educators.",
    },
    {
      period: "Early Q3",
      milestone: "Launched zCult for personalized student learning paths; AI integration completed.",
    },
    {
      period: "Late Q3",
      milestone: "Scaled beta testing to 20 institutions; gathered detailed feedback to refine features.",
    },
    {
      period: "Early Q4",
      milestone: "Developed a scalable architecture for national expansion; partnered with two government organizations.",
    },
    {
      period: "Late Q4",
      milestone: "Rolled out zSpeed analytics dashboard for real-time student performance tracking.",
    },
    {
      period: "Now",
      milestone: "Achieved global rollout; onboarded 50 institutions across 3 countries.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full space-x-6 p-4">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[250px] bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <div className="text-base font-semibold text-gray-700">{item.period}</div>
            <div className="text-xs text-gray-500 mt-2">{item.milestone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
