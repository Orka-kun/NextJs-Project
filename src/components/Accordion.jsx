"use client"
import { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick, isDropdown }) => (
  <div className="border-b">
    <button
      className=" text-left py-4 text-base font-bold focus:outline-none flex justify-between items-center bg-white rounded-lg max-w-[52rem] pt-10"
      onClick={onClick}
    >
      {title}
      {!isDropdown && (
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      )}
    </button>
    {isOpen && !isDropdown && (
      <div className="py-2 pl-5 text-gray-600">
        {content}
      </div>
    )}
    {isDropdown && (
      <select className="w-full bg-white font-bold text-base rounded-lg py-4 pl-4">
        {content.map((option, index) => (
          <option key={index} value={index}>{option}</option>
        ))}
      </select>
    )}
  </div>
);

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-rows-5 text-left py-4 gap-2 pt-10 text-base font-bold bg-white rounded-lg max-w-[52rem] ">
      <AccordionItem
        title="কোর্সের ভর্তি বাতিল করা কী সম্ভব ?"
        content=""
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
      />
      <AccordionItem
        title="সার্টিফিকেটের মেয়াদ কী শেষ হবে ?"
        content={[
          'আপনার সার্টিফিকেটের মেয়াদ কখনোই শেষ হবেনা, আপনি নিজের সুবিধামত সার্টিফিকেটটি যখন ইচ্ছা ব্যবহার করতে পারবেন।'
        ]}
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      />
      <AccordionItem
        title="কোন টেকনিকাল সমস্যা কিভাবে রিপোর্ট করবো ?"
        content=""
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
      />
      <AccordionItem
        title="পাসওয়ার্ড ভুলে গেলে কিভাবে ঠিক করবো ?"
        content=""
        isOpen={openIndex === 3}
        onClick={() => toggleAccordion(3)}
      />
      <AccordionItem
        title="আপনাদের সাতে কিভাবে যোগাযোগ করবো ?"
        content=""
        isOpen={openIndex === 4}
        onClick={() => toggleAccordion(4)}
      />
    </div>
  );
}
