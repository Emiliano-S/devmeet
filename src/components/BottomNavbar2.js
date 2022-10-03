import React from "react";
import home from "../assets/svg/home.svg";

export default function BottomNavbar2() {
    return (
        <>

            {/* bottone centrale devmeet */}
            <div className="navbar-central-button-container">
                <button className="navbar-button">
                    <svg width="200" height="140" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_837_98)">
                            <circle cx="57" cy="60" r="37" fill="#364764" />
                        </g>
                        <circle cx="57.0033" cy="60.0001" r="31.7143" fill="#FCF347" />
                        <path d="M56.2615 45.4644L38.5 51.3257V60.2952L56.2615 65.9789V59.94L42.9404 56.4765L56.2615 53.3682V45.4644Z" fill="#364764" />
                        <path d="M58.5703 53.457V59.496L71.8915 62.9595L58.5703 66.0677V74.0604L76.3319 68.1991V59.1407L58.5703 53.457Z" fill="#364764" />
                        <defs>
                            <filter id="filter0_d_837_98" x="0" y="0" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-3" />
                                <feGaussianBlur stdDeviation="10" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.176008 0 0 0 0 0.176008 0 0 0 0 0.176008 0 0 0 0.141444 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_837_98" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_837_98" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
            </div>

            <nav>
                {/* ----------------HOME---------------- */}
                <button className="navbar-svg">
                    <div className="navbar-svg-container">
                        <img src={home} />
                        <div style={{ color: "white" }}>home</div>
                    </div>
                </button>

                {/* ----------------FILTRA---------------- */}
                <button className="navbar-svg" style={{ marginRight: 'auto' }} >
                    <div className="navbar-svg-container" >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5.5" cy="13.7522" r="2.25" stroke="white" stroke-width="1.5" />
                            <circle cx="12.5" cy="5.36621" r="2.25" stroke="white" stroke-width="1.5" />
                            <circle cx="19.5" cy="15.3193" r="2.25" stroke="white" stroke-width="1.5" />
                            <path d="M5.5 3.5V11.2284" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M5.5 16.1686V20.0431" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M12.5 7.8606V20.0431" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M19.5 3.5L19.5 12.8612" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M19.5 17.7422V20.043" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div style={{ color: "white" }}>filtra</div>
                </button>

                {/* ----------------CERCA---------------- */}
                <button className="navbar-svg">
                    <div className="navbar-svg-container">
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5859 3.66665C7.04211 3.66665 4.16927 6.53949 4.16927 10.0833C4.16927 13.6271 7.04211 16.5 10.5859 16.5C14.1298 16.5 17.0026 13.6271 17.0026 10.0833C17.0026 6.53949 14.1298 3.66665 10.5859 3.66665ZM2.33594 10.0833C2.33594 5.52696 6.02959 1.83331 10.5859 1.83331C15.1423 1.83331 18.8359 5.52696 18.8359 10.0833C18.8359 14.6397 15.1423 18.3333 10.5859 18.3333C6.02959 18.3333 2.33594 14.6397 2.33594 10.0833Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1122 14.6143C15.4702 14.2563 16.0506 14.2563 16.4086 14.6143L20.3961 18.6018C20.7541 18.9598 20.7541 19.5402 20.3961 19.8982C20.0381 20.2562 19.4577 20.2562 19.0997 19.8982L15.1122 15.9107C14.7543 15.5527 14.7543 14.9723 15.1122 14.6143Z" fill="white" />
                        </svg>
                        <div style={{ color: "white" }}>cerca</div>
                    </div>
                </button>

                {/* ----------------CALENDARIO---------------- */}
                <button className="navbar-svg">
                    <div className="navbar-svg-container">
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_535_361)">
                                <path d="M0.5 18.6221C0.5 13.7515 0.5 8.88641 0.5 4.02129C0.510955 3.98842 0.527387 3.96102 0.532864 3.92815C0.779343 2.56395 1.86933 1.64352 3.24961 1.64352C3.79734 1.64352 4.34507 1.64352 4.88732 1.64352C4.95305 1.64352 5.01878 1.64352 5.08998 1.64352C5.08998 1.29836 5.08998 0.98607 5.08998 0.668303C5.08998 0.399845 5.21596 0.197132 5.45696 0.0711209C5.88967 -0.148029 6.38811 0.158781 6.40454 0.657346C6.41002 0.980591 6.40454 1.30932 6.40454 1.63256C9.48279 1.63256 12.5282 1.63256 15.59 1.63256C15.59 1.2874 15.579 0.958676 15.59 0.624473C15.6064 0.273834 15.8912 0.00537606 16.2363 -0.000102679C16.5869 -0.00558142 16.8826 0.262877 16.9045 0.618995C16.91 0.734048 16.9045 0.849102 16.9045 0.969634C16.9045 1.19426 16.9045 1.41341 16.9045 1.64352C17.5563 1.64352 18.1808 1.63804 18.7997 1.64352C20.2895 1.65448 21.489 2.84336 21.4945 4.3281C21.5 8.99051 21.5055 13.6474 21.489 18.3098C21.4836 19.4768 20.8865 20.3096 19.8185 20.7917C19.5994 20.8903 19.3529 20.9342 19.1174 20.9999C13.7058 20.9999 8.28873 20.9999 2.87715 20.9999C2.83881 20.9889 2.80047 20.9725 2.76213 20.9615C1.65571 20.7424 0.932707 20.085 0.593114 19.0111C0.554773 18.8851 0.532864 18.7536 0.5 18.6221ZM20.1854 7.23183C14.0454 7.23183 7.93819 7.23183 1.81455 7.23183C1.81455 7.33045 1.81455 7.40715 1.81455 7.48933C1.81455 11.0341 1.81455 14.5843 1.81455 18.129C1.81455 19.1152 2.37872 19.6795 3.36463 19.6795C8.45853 19.6795 13.5469 19.6795 18.6408 19.6795C19.6268 19.6795 20.1909 19.1152 20.1909 18.129C20.1909 14.5733 20.1909 11.0231 20.1909 7.46742C20.1854 7.39619 20.1854 7.32497 20.1854 7.23183ZM1.82003 5.89502C7.95462 5.89502 14.0618 5.89502 20.1745 5.89502C20.18 5.86215 20.1854 5.84023 20.1854 5.8238C20.1854 5.33071 20.1909 4.83762 20.1854 4.35002C20.1745 3.64326 19.6761 3.03512 18.9695 2.98033C18.2903 2.93102 17.6056 2.96937 16.91 2.96937C16.91 3.16661 16.91 3.35836 16.91 3.55012C16.91 3.97746 16.6307 4.27879 16.2418 4.27331C15.8638 4.26783 15.5955 3.97198 15.5955 3.55012C15.5955 3.35289 15.5955 3.16113 15.5955 2.96937C12.5172 2.96937 9.47183 2.96937 6.41002 2.96937C6.41002 3.18304 6.41549 3.38576 6.41002 3.58847C6.40454 3.97746 6.1252 4.26236 5.76369 4.26783C5.39124 4.27331 5.10642 3.97746 5.10094 3.58299C5.09546 3.38028 5.10094 3.17757 5.10094 2.96389C4.39984 2.96389 3.71518 2.92554 3.03599 2.97485C2.38967 3.01868 1.8748 3.56108 1.83099 4.20209C1.79264 4.76092 1.82003 5.31975 1.82003 5.89502Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_535_361">
                                    <rect width="21" height="21" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div style={{ color: "white" }}>calendario</div>
                    </div>
                </button>
            </nav>
        </>
    )
}