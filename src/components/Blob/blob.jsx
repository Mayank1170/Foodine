import React from "react";

const Blob = () => {
    return (
        <div className="relative flex justify-center min-h-screen bg-[#250821]">
            <div className="absolute w-[500px] h-[500px] bg-[#fff]">
                <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <g transform="translate(159.9864158630371, -18.710800170898438)">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color: rgb(238, 205, 163);"></stop>
                                <stop offset="100%" style="stop-color: rgb(255, 60, 95);"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#gradient)">
                            <animate attributeName="d">
                                delay={10000}
                                repeatCount={indefinite}
                                values={M399,277.5Q364,305,381.5,371Q399,437,351,459.5Q303,482,257.5,449Q212,416,164.5,416.5Q117,417,89.5,379Q62,341,47,295.5Q32,250,61.5,211.5Q91,173,105.5,130Q120,87,163.5,74Q207,61,245.5,80.5Q284,100,345,77.5Q406,55,423.5,106.5Q441,158,437.5,204Q434,250,399,277.5Z}
                            </animate>
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    )
}
export default Blob