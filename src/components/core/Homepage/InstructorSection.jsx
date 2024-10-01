import React from 'react';
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText';
import CTAButton from './CTAButton';
import { FaArrowRight } from 'react-icons/fa';

function InstructorSection() {
    return (
        <div className='mt-16'>
            <div className='lg:flex lg:flex-row flex flex-col-reverse gap-20 items-center'>
                <div className='lg:w-[50%]'>
                    <img
                        src={Instructor}
                        alt='instrcutor image'
                        className='' />
                </div>

                <div className='lg:w-[50%] flex flex-col gap-4'>
                    <div className='text-4xl font-semibold w-[50%]'>
                        Become an <HighlightText text={"Instructor"} />
                    </div>

                    <div className='font-medium text-[16px] lg:w-[80%] text-richblack-300'>
                        A great teacher is more than just a dispenser of information; they are mentors, counselors, and role models, dedicated to unlocking the boundless possibilities within each young mind. With unwavering patience and a deep well of compassion, they navigate the unique challenges and learning styles of every student, ensuring that no one is left behind.
                    </div>

                    <div className='w-fit'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex justify-center items-center gap-2'>
                                Start Learning Today
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InstructorSection