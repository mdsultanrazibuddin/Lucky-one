import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div>
               <h1 className='header-name'>Questions With Answer</h1>
            </div> 
           <div  className='optional' >
                <div>
                    <h2 className='question'>প্রশ্ন-১ঃ  React কিভাবে কাজ করে ? </h2>
                    <p><span className='answer'>উত্তরঃ <br />
                    </span> React একটি জাভাস্ক্রিপ্ট লাইব্রেরী, যা দিয়ে ইউজার ইন্টারফেস তৈরি করা যায়। <br />
                    React একটি ফ্লেক্সিবল, ডিক্লারেটিভ ও ইফেক্টিভ জাভাস্ক্রিপ্ট লাইব্রেরী। <br />
                     React দিয়ে খুব দ্রুত ওয়েব ও মোবাইল অ্যাপ তৈরী করা যায়। <br />
                     React এ ‌রিইউজেবল কম্পোনেন্ট তৈরি করা যায়, যা দিয়ে কম সময়ে দ্রুত ডেভেলপমেন্ট এবং কোডিংয়ে ইরর কমাতে সাহায্য করে । <br />
                     React একটা সেইম টু সেইম একটা ব্রাউজারের ডমের মতো করে আরেকটা ডম তৈরী করে  ভার্চুয়াল ডম তৈরি করা হয়। </p>
                </div>
                <div>
                    <h2 className='question'>প্রশ্ন-২ঃ useState কিভাবে কাজ করে ?</h2>
                    <p><span>Answer :</span></p>
                </div>
           </div>
        </div>
    );
};

export default Question;