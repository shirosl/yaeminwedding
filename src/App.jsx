import React from 'react';
import { Plane, MapPin, BookUser, TrainFront, Hotel, Coffee,Mail, Phone, ExternalLink, CheckCircle } from 'lucide-react';
import bannerimg from "../dist/wedding.png";
// --- Data Definition ---dist/wedding.png
const BANNER_PATH = bannerimg; 
    const contact = {
        email: "shiroandyaemin@gmail.com",
        shiroPhone: "+60 12 500 1928",
        yaeminPhone: "+82 10 2994 1921",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSflhZssuNGv0DCc3jYbffOaLimaaAQNu7vk2zIqtLXPSIzXHw/viewform?pli=1",
        churchMapLink: "https://maps.app.goo.gl/icPmi6eHBhsJGGvz5"
    };

    const churches = [
        {
            name: "Sungai Siput Church [Wedding Venue]",
            address: "34, Taman Bukit Medan, 31100 Sungai Siput (U) Perak",
            mapLink: "https://maps.app.goo.gl/icPmi6eHBhsJGGvz5",
            schedule: [
                { day: "Fri", time: "7:45pm – 9:00pm", service: "Evening Service" },
                { day: "Sat", time: "10:30am – 11:30am", service: "Sabbath Service" },
                { day: "Sun", time: "10:00am – 11:00am", service: "REU Classes [Cancelled]", },
                { day: "Sun (22/3/2026)", time: "11:00am – 1:00pm", service: "Wedding", highlight: true },
            ]
        },
        {
            name: "Ipoh Church",
            address: "10, Jalan Voon Thian Soo, 30250 Ipoh",
            mapLink: "https://maps.app.goo.gl/uEcn5bSTNJyakFSw9",
            schedule: [
                { day: "Fri", time: "7:45pm – 9:00pm", service: "Evening Service" },
                { day: "Sat", time: "10:45am – 12:00pm", service: "Sabbath Service" },
                {  time: "11:10am – 12:10pm", service: "REU Classes (Elementary)" },
                {  time: "1:00pm – 2:00pm", service: "REU Classes (Junior)" },
                {  time: "3:00pm – 4:00pm", service: "Afternoon Sabbath Service" },
                { day: "Sun", time: "9:00am – 10:00am", service: "Morning Prayer" },
            ]
        },
        {
            name: "Bercham Church",
            address: "No. 24, Persiaran Tasek Timur 5, Taman Medan Bercham, 31400 Ipoh, Perak Darul Ridzuan",
            mapLink: "https://maps.app.goo.gl/XB2GZxMM9WSB8aoh7",
            schedule: [
                { day: "Fri", time: "7:45pm – 9:00pm", service: "Evening Service" },
                { day: "Sat", time: "11:00am – 12:00pm", service: "Morning Sabbath Service" },
                { time: "2:30pm – 3:30pm", service: "Afternoon Sabbath Service" },
                { time: "4:00pm – 5:30pm", service: "REU Classes" },
                { time: "6:30pm – 8:00pm", service: "Youth Service/ Choir Practice" },
            ]
        }
    ];

    // Helper component for content sections
    const Section = ({ icon: Icon, title, iconColor, children }) => (
        <div className="py-6 border-b border-gray-200">
            <div className="flex items-center mb-4 gap-3">
                <Icon className={`w-6 h-6 ${iconColor}`} />
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800">{title}</h2>
            </div>
            {children}
        </div>
    );

    // Helper component for dual language boxes
    const DualLanguageBox = ({ titleEn, contentEn, titleKo, contentKo }) => (
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-4">
            <div className="p-6 bg-gray-50 rounded-xl shadow-inner">
                <h3 className="text-base sm:text-lg font-bold text-gray-700 border-b pb-1 mb-3">{titleEn}</h3>
                <div className="text-gray-700 text-sm leading-relaxed">
                    {contentEn}
                </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-inner">
                <h3 className="text-base sm:text-lg font-bold text-gray-700 border-b pb-1 mb-3">{titleKo}</h3>
                <div className="text-gray-700 text-sm leading-relaxed">
                    {contentKo}
                </div>
            </div>
        </div>
    );

    const ChurchScheduleTable = ({ church }) => (
        <div className={`p-6 rounded-xl shadow-lg border-2 ${church.name.includes('Sungai Siput') ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-gray-200'}`}>
            <h4 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-gray-800">
                <MapPin className="w-5 h-5 text-indigo-500" />
                {church.name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">{church.address}</p>
            <a href={church.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 mb-4">
                View on Google Maps <ExternalLink size={13} className="inline mb-0.5" />
            </a>
            
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Day</th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Time</th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Service / Class</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {church.schedule.map((item, index) => (
                            <tr key={index} className={item.highlight ? 'bg-yellow-50 font-medium' : 'hover:bg-gray-50'}>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{item.day}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">{item.time}</td>
                                <td className="px-3 py-2 text-sm text-gray-600">{item.service}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
     const ImageErrorContent = () => (
        <div className="p-4 bg-red-800 bg-opacity-70 rounded-lg">
            <AlertTriangle className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
            <p className="text-lg font-bold text-yellow-300">Cannot Load Image (404 Error)</p>
            <p className="text-sm font-medium text-white mt-1">
                Browser looked for: <code className="bg-red-700 p-1 rounded font-mono">{BANNER_PATH}</code>
            </p>
            <p className="text-xs text-white italic mt-1">
                Please ensure the file is in the root of your public folder with the exact name and extension.
            </p>
        </div>
    );
const BannerContent = () => (
        <>
            <p className="text-base sm:text-xl font-light mb-2 opacity-90">Guest Travel Information</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-1">Shiro Chin & Yae Min Joh’s Wedding</h1>
            <h1 className="text-lg sm:text-3xl font-extrabold opacity-95">Shiro Chin & 조예민 결혼식</h1>
            <p className="mt-4 text-base sm:text-lg font-medium">
                Sunday, 22 March 2026 at 11 a.m.
            </p>
            <div className="mt-2 flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2" />
                <a href={contact.churchMapLink} target="_blank" rel="noopener noreferrer" 
                   className="hover:underline text-indigo-200 text-sm sm:text-base">
                  True Jesus Church, Sungai Siput (真耶穌教會 和丰教会), Perak, Malaysia
                </a>
            </div>
        </>
    );
// Main App component which is the default export
const App = () => {
    
    return (
        <div className="min-h-screen bg-gray-50 font-sans p-6 sm:p-8">
            {/* Removed max-w-* limits and added w-full to make the card expand fully, while mx-auto ensures the overall content remains centered within the available space. */}
            <div className="w-auto mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
                
                {/* Header Section */}
                <header  className="relative text-indigo-500 p-4 sm:p-8 text-center rounded-t-2xl overflow-hidden shadow-xl" 
                    style={{
                        minHeight: '250px', // Ensures minimum height even if background image is missing/failing
                        backgroundImage: `linear-gradient(to bottom, rgba(167, 234, 243, 0.2), rgba(252, 251, 251, 0.3)), url(${bannerimg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        //backgroundColor: '#581c87', // Fallback color
                    }}
                >
                     <p className="text-base sm:text-2xl font-bold mb-2 opacity-90">Guest Travel Information</p>
                    <h1 className="text-2xl sm:text-xl font-extrabold mb-1">Shiro Chin & Yae Min Joh’s Wedding</h1>
                    <h1 className="text-base sm:text-base font-extrabold opacity-95">Shiro Chin & 조예민 결혼식</h1>
                    <p className="mt-4 text-base sm:text-lg font-medium">
                        Sunday, 22 March 2026 at 11 a.m.
                    </p>
                    <div className="mt-2 flex items-center justify-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <a href={contact.churchMapLink} target="_blank" rel="noopener noreferrer" 
                        className="hover:underline text-indigo-200 text-sm sm:text-base">
                        True Jesus Church, Sungai Siput (真耶穌教會 和丰教会), Perak, Malaysia
                        </a>
                    </div>


                </header>

                <main className="p-4 sm:p-8">
                    
                    {/* Welcome Section */}
                    <Section icon={CheckCircle} title="Welcome to Malaysia" iconColor="text-green-600">
                        <DualLanguageBox
                            titleEn="English"
                            contentEn={<p>We are deeply grateful that you are travelling from afar to celebrate this joyful occasion with us. To assist in your travel planning, we have prepared the following information and recommendations.</p>}
                            titleKo="한국어"
                            contentKo={<p>먼 길을 오셔서 저희의 소중한 날을 함께 축하해 주심에 진심으로 감사드립니다. 하객 여러분의 여행 준비에 도움이 될 수 있도록 아래와 같이 안내드립니다.</p>}
                        />
                    </Section>

                    {/* Airport Section */}
                    <Section icon={Plane} title="Getting to Malaysia (Airport Information)" iconColor="text-indigo-600">
                        <DualLanguageBox
                            titleEn="English"
                            contentEn={
                                <>
                                    <p className="font-bold text-gray-700">Nearest International Airport:</p>
                                    <p>Kuala Lumpur International Airport (KLIA / KLIA2) – approximately 2.5 to 3 hours by car to Ipoh / Sungai Siput.</p>
                                    <p className="font-bold text-gray-700 mt-4">Nearest Local Airport:</p>
                                    <p>Sultan Azlan Shah Airport in Ipoh (IPH) – about 1 hour by car to True Jesus Church Sungai Siput.</p>
                                </>
                            }
                            titleKo="한국어"
                            contentKo={
                                <>
                                    <p className="font-bold text-gray-700">가장 가까운 국제공항:</p>
                                    <p>쿠알라룸푸르 국제공항 (KLIA / KLIA2) – 이포/숭가이시풋까지 약 2.5~3 시간 거리</p>
                                    <p className="font-bold text-gray-700 mt-4">가장 가까운 현지공항:</p>
                                    <p>술탄 아즈란 샤 공항 (이포 시에 위치) – 참예수교회 숭가이 시푸트까지 차로 약 1 시간</p>
                                </>
                            }
                        />
                    </Section>
                    
                    {/* Visa Section */}
                    <Section icon={BookUser} title="Visa Information and Entry Requirements" iconColor="text-yellow-600">
                        <DualLanguageBox
                            titleEn="English"
                            contentEn={
                                <ul className="list-disc ml-6 space-y-2">
                                  <li>Most guests (Korea, New Zealand, etc.) may enter Malaysia visa-free for short stays. Please confirm the latest regulations prior to departure.</li>
                                  <li>Ensure your passport is valid for at least 6 months from the date you exit Malaysia.</li>
                                  <li>Foreign nationals must complete the <span className="font-bold">Malaysia Digital Arrival Card (MDAC)</span> prior to arrival (within 3 days before arrival): <a href="https://imigresen-online.imi.gov.my/mdac/main" target="_blank" className="text-blue-600 hover:underline">MDAC Registration <ExternalLink size={13} className="inline mb-0.5" /></a>.</li>
                                </ul>
                            }
                            titleKo="한국어"
                            contentKo={
                                <ul className="list-disc ml-6 space-y-2">
                                  <li>대한민국, 뉴질랜드 등 대부분의 국가는 단기 체류 시 무비자 입국이 가능합니다. 최신 입국 규정을 한 번 더 확인하시기 바랍니다.</li>
                                  <li>말레이시아 출국일로부터 여권 유효기간이 최소 6 개월 이상 남아 있는지 확인하십시오.</li>
                                  <li>외국인은 말레이시아 도착 전에 <span className="font-bold">말레이시아 디지털 입국 카드(MDAC)</span>를 작성해야 합니다 (입국일 기준 3 일 전부터 작성 가능): <a href="https://imigresen-online.imi.gov.my/mdac/main" target="_blank" className="text-blue-600 hover:underline">MDAC 작성 <ExternalLink size={13} className="inline mb-0.5" /></a>.</li>
                                </ul>
                            }
                        />
                    </Section>

                    {/* Congestion Section */}
                    <Section icon={TrainFront} title="Travel to Sungai Siput / Ipoh (Holiday Congestion Alert!)" iconColor="text-red-600">
                        <DualLanguageBox
                            titleEn="English"
                            contentEn={
                                <>
                                    <p className="font-bold text-red-600 mb-2">Warning: March 21-22 is a major holiday, causing severe traffic congestion on the KL-Ipoh route. So if you are travelling by car or bus, travel time will take
much longer than usual and the Kuala Lumpur-Ipoh route can get really busy. </p>
                                    <p className="font-bold mt-3">Travel Options:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li><span className="font-semibold">By Car:</span> Approx 3 hours (will be much longer during the holiday).</li>
                                        <li><span className="font-semibold">By Train (ETS):</span> KL Sentral to Ipoh (2.5 hours). <a href="http://www.ktmb.com.my" target="_blank" className="text-blue-600 hover:underline">Book ETS Tickets</a></li>
                                        <li><span className="font-semibold">By Bus:</span> KL to Ipoh (3-4 hours, heavy delays expected).</li>
                                    </ul>
                                    <p className="font-bold mt-4 text-green-700">Recommended Options:</p>
                                    <ul className="list-decimal ml-6 space-y-2">
                                        <li><span className="font-semibold">Use ETS Train:</span> Fastest way to avoid traffic. There is also a train from KL Sentral to Sungai Siput which takes about 2 hours 50 minutes. <a href="https://online.ktmb.com.my/" target="_blank" className="text-blue-600 hover:underline">ETS Booking</a></li>
                                        <li><span className="font-semibold">Direct Airport Bus to Ipoh:</span> Reserved bus from KLIA/KLIA2 every 1-2 hours. <a href="https://www.yoyo.my/" target="_blank" className="text-blue-600 hover:underline">Yoyo Bus Booking</a></li>
                                        <li><span className="font-semibold">Arrive Earlier:</span> Travel to Ipoh on March 18th or 19th to avoid traffic.</li>
                                        <li><span className="font-semibold">Fly Closer:</span> Fly to Singapore, then connect to Ipoh Airport (IPH). <a href="https://booking.flyscoot.com/" target="_blank" className="text-blue-600 hover:underline">Scoot Booking</a></li>
                                    </ul>
                                    <p className="mt-4">In Ipoh, taxis and Grab are easy to find.</p>
                                </>
                            }
                            titleKo="한국어"
                            contentKo={
                                <>
                                    <p className="font-bold text-red-600 mb-2">주의: 3월 21-22일은 주요 공휴일로, KL-이포 노선에 심각한 교통 체증이 예상됩니다. 
                                      따라서 자동차나 버스로 이동하시는 경우 평소보다 이동 시간이 훨씬 길어지고 쿠알라룸푸르-이포 노선이 매우 혼잡할 수 있습니다. </p>
                                    <p className="font-bold mt-3">이동 방법:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li><span className="font-semibold">자가용:</span> 약 3 시간 소요 (공휴일 기간에는 훨씬 길어집니다).</li>
                                        <li><span className="font-semibold">기차(ETS):</span> KL Sentral → Ipoh Station (2.5 시간). <a href="http://www.ktmb.com.my" target="_blank" className="text-blue-600 hover:underline">ETS 예약</a></li>
                                        <li><span className="font-semibold">버스:</span> KL → 이포 (3~4 시간, 심각한 지연 예상).</li>
                                    </ul>
                                    <p className="font-bold mt-4 text-green-700">권장 옵션:</p>
                                    <ul className="list-decimal ml-6 space-y-2">
                                        <li><span className="font-semibold">ETS(전기 열차) 이용:</span> 교통 체증을 피하는 가장 빠른 방법. KL Sentral에서 Sungai Siput까지 약 2시간 50분 소요되는 기차도 있습니다. <a href="https://online.ktmb.com.my/" target="_blank" className="text-blue-600 hover:underline">ETS 기차표 예약</a></li>
                                        <li><span className="font-semibold">쿠알라룸푸르 공항 직행버스:</span> 1~2 시간 간격 운행, 사전 예약 가능. <a href="https://www.yoyo.my/" target="_blank" className="text-blue-600 hover:underline">버스 예약</a></li>
                                        <li><span className="font-semibold">이포에 일찍 도착하기:</span> 3월 18일이나 19일에 출발하면 교통 상황이 좋습니다.</li>
                                        <li><span className="font-semibold">이포 공항으로 비행:</span> 싱가포르 경유 후 이포 공항(IPH)으로 환승. <a href="https://booking.flyscoot.com/" target="_blank" className="text-blue-600 hover:underline">비행기 예약</a></li>
                                    </ul>
                                    <p className="mt-4">이포에 도착하면 택시와 그랩을 쉽게 찾을 수 있습니다.</p>
                                </>
                            }
                        />
                    </Section>

                    {/* Accommodation Section */}
                    <Section icon={Hotel} title="Accommodation" iconColor="text-teal-600">
                        <DualLanguageBox
                            titleEn="English"
                            contentEn={
                                <>
                                <p>Please book your own hotel in Sungai Siput or Ipoh (near Ipoh bus terminal or Ipoh train station) as soon as possible because reservations are filling up fast. </p>
                                    
                                {/**
                                 
                                <p>We recommend staying in or near <strong>Ipoh</strong>. It offers comfortable hotels and convenient access to the wedding venue.</p>
                                    <p className="font-bold mt-4">Suggested Hotels:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li><span className="font-semibold">MH Hotel Ipoh:</span> Closest to Sungai Siput. <span className="text-indigo-500 font-bold">Highly recommended.</span> <a href="https://www.agoda.com/mh-hotels-ipoh/hotel/ipoh-my.html" target="_blank" className="text-blue-600 hover:underline">Check Prices</a></li>
                                        <li><span className="font-semibold">Weil Hotel, Ipoh:</span> Modern hotel in the city centre.</li>
                                        <li><span className="font-semibold">M Boutique Hotel, Ipoh:</span> Stylish boutique option with local character.</li>
                                    </ul>
                                 */
                                  
                                }    
                                </>
                            }
                            titleKo="한국어"
                            contentKo={
                                <>
                                <p>숭가이 시풋 또는 이포(이포 버스 터미널 또는 이포 기차역 근처)에 있는 호텔은 예약이 빠르게 마감되고 있으니 가능한 한 빨리 예약해 주세요.  </p>
                                    {/**<p>결혼식장과 가까운 <strong>이포 (Ipoh)</strong> 지역 숙박을 추천드립니다. 다양한 호텔이 있으며 접근성이 좋습니다.</p>
                                    <p className="font-bold mt-4">추천 호텔:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li><span className="font-semibold">MH Hotel Ipoh:</span> 숭가이 시풋에서 가장 가까움. <span className="text-indigo-500 font-bold">적극 추천합니다.</span> <a href="https://www.agoda.com/mh-hotels-ipoh/hotel/ipoh-my.html" target="_blank" className="text-blue-600 hover:underline">가격 확인</a></li>
                                        <li><span className="font-semibold">Weil Hotel Ipoh:</span> 이포 시내 중심, 모던하고 편리한 호텔</li>
                                        <li><span className="font-semibold">M Boutique Hotel Ipoh:</span> 세련된 디자인과 지역 감성이 어우러진 부티크 호텔</li>
                                    </ul>*/}
                                </>
                            }
                        />
                    </Section>

                    {/* Experience Section */}
                    <Section icon={Coffee} title="Things to Experience in Ipoh" iconColor="text-amber-600">
                        <DualLanguageBox
                            titleEn="English"
                            contentEn={
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Explore <strong>Ipoh Old Town</strong> (heritage buildings, famous white coffee).</li>
                                    <li>Visit <strong>Kek Lok Tong Cave Temple</strong> or <strong>Kellie’s Castle</strong>.</li>
                                    <li>Savour local specialties: <strong>Ipoh Hor Fun, Bean Sprout Chicken, and Salted Chicken</strong>.</li>
                                </ul>
                            }
                            titleKo="한국어"
                            contentKo={
                                <ul className="list-disc ml-6 space-y-2">
                                    <li><strong>이포 올드타운 산책</strong> (유서 깊은 건물, 유명 화이트 커피 카페 탐방)</li>
                                    <li><strong>극락동 (Kek Lok Tong) 석굴사원</strong> 또는 <strong>켈리 캐슬 (Kellie’s Castle) 관람</strong></li>
                                    <li>추천 음식: <strong>이포 호펀, 숙주 닭, 소금구이 닭</strong></li>
                                </ul>
                            }
                        />
                    </Section>

                    {/* Service Schedule Section */}
                    <Section icon={MapPin} title="Service Schedule of True Jesus Churches in the area" iconColor="text-purple-600">
                        <p className="text-sm italic text-gray-600 mb-6">
                            *The service times are subject to change. Please confirm locally if necessary.
                        </p>
                        
                        <div className="space-y-8">
                            {churches.map((church, index) => (
                                <ChurchScheduleTable key={index} church={church} />
                            ))}
                        </div>
                    </Section>
                    
                    {/* Google Form Section */}
                    <div className="py-6 last:border-b-0">
                        <div className="flex items-center mb-4 gap-3">
                            <CheckCircle className="w-6 h-6 text-pink-600" />
                            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800">
                                RSVP and Travel Confirmation
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 mt-4">
                            {/* English Column */}
                            <div className="p-6 bg-pink-50 rounded-xl border border-pink-200 shadow-md">
                                <h3 className="text-lg font-bold text-pink-700 border-b border-pink-300 pb-1 mb-3">Action Required (English)</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Once everything is booked, please fill out this Google Form so that we can be informed about your arrival and departure.
                                </p>
                                <div className="mt-4 text-center">
                                    <a href={contact.formLink} target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-pink-600 hover:bg-pink-700 transition duration-150">
                                        Google Form Link 
                                        <ExternalLink size={16} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Korean Column */}
                            <div className="p-6 bg-pink-50 rounded-xl border border-pink-200 shadow-md">
                                <h3 className="text-lg font-bold text-pink-700 border-b border-pink-300 pb-1 mb-3">요청 사항 (한국어)</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    모든 예약을 완료하시면 이 구글 폼을 작성해 주시면 감사드리겠습니다!
                                </p>
                                 <div className="mt-4 text-center">
                                    <a href={contact.formLink} target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-pink-600 hover:bg-pink-700 transition duration-150">
                                        구글 폼 링크 
                                        <ExternalLink size={16} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="pt-6">
                        <div className="flex items-center mb-4 gap-3">
                            <Mail className="w-6 h-6 text-gray-700" />
                            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800">Contact Us / 문의 및 연락처</h2>
                        </div>
                        
                        <p className="text-gray-700 mb-6">
                          For any questions regarding travel or local arrangements, please do not hesitate to reach out.<br/>
                          여행 또는 현지 관련 문의가 있으시면 편하게 연락 주세요.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg shadow-sm">
                                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                                <span >Email: <a href={`mailto:${contact.email}`} className="text-blue-600 font-medium hover:underline">{contact.email}</a></span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center p-3 bg-green-50 rounded-lg shadow-sm">
                                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                                    <span className="text-green-600">Shiro: <a href={`tel:${contact.shiroPhone.replace(/\s/g, '')}`} className="text-green-600 font-medium hover:underline">{contact.shiroPhone}</a></span>
                                </div>
                                <div className="flex items-center p-3 bg-green-50 rounded-lg shadow-sm">
                                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                                    <span className="text-green-600">조예민 (Yae Min): <a href={`tel:${contact.yaeminPhone.replace(/\s/g, '')}`} className="text-green-600 font-medium hover:underline">{contact.yaeminPhone}</a></span>
                                </div>
                            </div>
                        </div>
                        
                        <p className="mt-10 text-center text-lg text-gray-800 font-semibold italic">
                          We sincerely look forward to sharing this special day with you in Malaysia.
                          <br/>
                          감사와 사랑의 마음을 담아, Shiro 와 예민 드림.
                        </p>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default App