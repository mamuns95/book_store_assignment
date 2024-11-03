import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-sm rounded-none btn-primary ml-7">
        আপডেট
      </button>
      <Marquee
        pauseOnHover={true}
        className="hover:text-indigo-500 transition duration-500 ease-in-out"
      >
        ৪৭তম বিসিএস পরীক্ষার মাধ্যমে বিভিন্ন ক্যাডারে প্রবেশের পদে নিয়োগের জন্য
        ক্যাডার নিয়ন্ত্রণকারী মন্ত্রণালয় বা বিভাগগুলোর চাহিদা মোতাবেক তিন হাজর
        ৪৬০ শূন্য পদের বিপরীতে নিয়োগ বিজ্ঞাপ্তি জারি করে প্রয়োজনীয় ব্যবস্থা
        নেওয়ার জন্য বাংলাদেশ সরকারি কর্ম কমিশনকে বুধবার (২৩ অক্টোবর) চিঠি দিয়েছে
        জনপ্রশাসন মন্ত্রণালয়। 
      </Marquee>
    </div>
  );
};

export default BreakingNews;
