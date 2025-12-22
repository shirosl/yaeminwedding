import React from 'react';
import { Plane, MapPin, BookUser, TrainFront, Hotel,Heart, Coffee,Mail, Phone, ExternalLink, CheckCircle, ArrowBigUpDash, House, DollarSign} from 'lucide-react';
import bannerimg from "../dist/wedding.png";
// --- Data Definition ---dist/wedding.png
const BANNER_PATH = bannerimg; 

const SECTIONS = [
    { id: 'welcome', enTitle: "Welcome", koTitle: "환영" },
    { id: 'airport', enTitle: "Airport & Visa", koTitle: "공항 및 비자" },
    { id: 'travel', enTitle: "Transportation", koTitle: "교통" },
    { id: 'accommodation', enTitle: "Stays", koTitle: "숙소" },
    { id: 'experience', enTitle: "Experience Ipoh", koTitle: "이포 체험" },
    { id: 'schedule', enTitle: "Church Schedule", koTitle: "예배 시간" },
];

const NavigationTabs = ({ language,scrolled, setLanguage }) => {
     return (
        // Wrapper for the entire sticky navigation bar
        <div className={`fixed left-0 right-0 z-50 flex justify-center w-full transition-all duration-300 ${scrolled ? 'top-0 bg-white/90 backdrop-blur-md shadow-sm py-2' : 'top-5 bg-transparent py-4'}`}>
            <div className="p-3 sm:px-8 w-full max-w-6xl">
            {/* Tabs Container - Allows horizontal scrolling on small screens 
                <div className="flex gap-2 ml-4">

                        <button onClick={() => setLanguage('en')} className={`btn-toggle text-[10px] font-bold border flex items-center justify-center ${language === 'en' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-200'}`}>En</button>

                        <button onClick={() => setLanguage('ko')} className={`btn-toggle text-[10px] font-bold border  flex items-center justify-center ${language === 'ko' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-200'}`}>Ko</button>

                </div>
                
            <div className="flex items-center justify-start py-1">
                */}
                
                <div className="flex flex-grow overflow-x-auto whitespace-nowrap gap-1 pr-4 scrollbar-hide"> 
                    {SECTIONS.map((section) => ( 
                        <a // Changed from button to <a> for native anchor linking
                            key={section.id}
                            href={`#${section.id}`} // Target the section ID
                            className="flex-shrink-0 px-3 py-1 text-xs font-semibold rounded-full 
                                       bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors duration-200 
                                       shadow-sm hover:shadow-md active:scale-[.98] hover:no-underline"
                        >
                            {language === 'en' ? section.enTitle : section.koTitle}
                        </a>
                    ))}
                    <a
                        href="#rsvp"
                        className="flex-shrink-0 px-3 py-1 text-xs font-semibold rounded-full 
                                   bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors duration-200 
                                   shadow-sm hover:shadow-md active:scale-[.98] hover:no-underline"
                    >
                        RSVP
                    </a>
                </div>
                
            </div>
            </div>
            
        </div>
    );
};
const LanguageSwitcher = ({ language, setLanguage }) => (
    <div className="flex gap-2 ml-4">
        <button
            onClick={() => setLanguage('en')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-md transform hover:scale-105 ${
                language === 'en'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
        >
            English
        </button>
        <button
            onClick={() => setLanguage('ko')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-md transform hover:scale-105 ${
                language === 'ko'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
        >
            한국어
        </button>
    </div>
);
const BackToTopAndRsvpButton = ({ language, formLink,setLanguage }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => {
        // Show the button after scrolling 300px
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Set up scroll listener
    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
    <div>

        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
            
            {/* 1. Back to Top Button (Visible on scroll) */}
            <button
                onClick={scrollToTop}
                className={`transition-opacity duration-300 p-3 rounded-full bg-indigo-700 text-white shadow-xl hover:bg-indigo-800 transform hover:scale-105 active:scale-95 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
                }`}
                aria-label="Go to top of page"
            >
                {/* Plane icon rotated to look like it's taking off */}
                <ArrowBigUpDash className="w-5 h-5" /> 
            </button>
            
        <div className="">
                <button onClick={() => setLanguage('en')} className={`btn-toggle text-[10px] font-bold border flex items-center justify-center ${language === 'en' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-200'}`}>En</button>
                <button onClick={() => setLanguage('ko')} className={`btn-toggle text-[10px] font-bold border  flex items-center justify-center ${language === 'ko' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-200'}`}>Ko</button>

        </div>
            {/* 2. RSVP Button (Always visible and prominent) */}
            <a 
                href={formLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-5 py-3 text-sm font-bold rounded-full shadow-2xl text-white bg-pink-600 hover:bg-pink-700 transition duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
                <CheckCircle className="w-5 h-5 inline mr-2" />
                {language === 'en' ? 'RSVP / Confirm' : '참석 확인'}
            </a>
        </div>
    </div>
       
    );
};
const CountdownTimer = ({ language }) => {
    const calculateTimeLeft = () => {
        const weddingDate = new Date('2026-03-22T11:00:00+08:00');
        const difference = +weddingDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 60000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="flex gap-4 justify-center my-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-2 min-w-[70px] border border-white/30">
                    <span className="text-2xl font-bold font-serif">{value}</span>
                    <span className="text-[10px] uppercase tracking-wider">
                        {language === 'en' ? unit : (unit === 'days' ? '일' : unit === 'hours' ? '시간' : '분')}
                    </span>
                </div>
            ))}
        </div>
    );
};

/**
 * Currency Converter Widget
 */
const CurrencyConverter = ({ language }) => {
    const [myrAmount, setMyrAmount] = React.useState(100);
    
    // Static Exchange Rates (as of Dec 2025 - simplified for demo)
    const RATES = {
        KRW: 280.00, // 1 MYR ≈ 280 KRW
        USD: 0.21,   // 1 MYR ≈ 0.21 USD
    };

    const handleInputChange = (e) => {
        const value = parseFloat(e.target.value);
        setMyrAmount(isNaN(value) ? 0 : value);
    };

    const convert = (amount, rate) => (amount * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const title = language === 'en' ? 'Quick Currency Converter' : '빠른 환율 변환기';
    const myrLabel = language === 'en' ? 'MYR (Ringgit)' : 'MYR (링깃)';

    return (
         <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mt-8 max-w-md mx-auto text-gray-900">

            <h4 className="text-lg font-bold flex items-center gap-2 mb-4 font-serif">

                <DollarSign size={20} className="text-emerald-600" /> 

                {language === 'en' ? 'Currency Converter' : '환율 변환기'}
            </h4>
            
            <label htmlFor="myr-input" className="block text-sm font-medium text-gray-500 mb-1">
                {myrLabel}
            </label>
            <input
                id="myr-input"
                type="number"
                value={myrAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 mb-4 text-lg font-sans"
                placeholder="Enter amount in MYR"
            />

            <div className="space-y-3">
                <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                    <span className="font-semibold text-green-800 font-sans">USD (Dollar):</span>
                    <span className="text-xl font-bold text-green-900 font-serif">
                        ${convert(myrAmount, RATES.USD)}
                    </span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                    <span className="font-semibold text-blue-800 font-sans">KRW (원):</span>
                    <span className="text-xl font-bold text-blue-900 font-serif">
                        ₩{convert(myrAmount, RATES.KRW)}
                    </span>
                </div>
            </div>
        </div>
    );
};



/**
 * Language Box Component (replaces LanguageBox)
 * Renders content based on the selected language.
 */
const LanguageBox = ({ language, enContent, koContent }) => {
    const content = language === 'en' ? enContent : koContent;
    
    return (
        <div className="p-4 bg-gray-50 rounded-xl shadow-inner mt-4">
            <div className="text-gray-700 text-sm leading-relaxed">
                {content}
            </div>
        </div>
    );
};
    const contact = {
        email: "shiroandyaemin@gmail.com",
        shiroPhone: "+60 12 500 1928",
        yaeminPhone: "+82 10 2994 1921",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSflhZssuNGv0DCc3jYbffOaLimaaAQNu7vk2zIqtLXPSIzXHw/viewform?pli=1",
        churchMapLink: "https://maps.app.goo.gl/icPmi6eHBhsJGGvz5"
    };

    const churches = [
        {
            name: "Sungai Siput Church [Wedding Venue] 성가시푸 교회 [결혼식 장소]",
            address: "34, Taman Bukit Medan, 31100 Sungai Siput (U) Perak",
            mapLink: "https://maps.app.goo.gl/icPmi6eHBhsJGGvz5",
            schedule: [
                { day: "Fri/금", time: "7:45pm – 9:00pm", service: "Evening Service/종일 모임" },
                { day: "Sat/토", time: "10:30am – 11:30am", service: "Sabbath Service/주일 모임" },
                { day: "Sun/일", time: "10:00am – 11:00am", service: "REU Classes [Cancelled]/REU 클래스 [취소]", },
                { day: "Sun/일 (22/3/2026)", time: "11:00am – 1:00pm", service: "Wedding/결혼식", highlight: true },
            ]
        },
        {
            name: "Ipoh Church /이포 교회",
            address: "10, Jalan Voon Thian Soo, 30250 Ipoh",
            mapLink: "https://maps.app.goo.gl/uEcn5bSTNJyakFSw9",
            schedule: [
                { day: "Fri/금", time: "7:45pm – 9:00pm", service: "Evening Service/종일 모임" },
                { day: "Sat/토", time: "10:45am – 12:00pm", service: "Sabbath Service/주일 모임" },
                {  time: "11:10am – 12:10pm", service: "REU Classes (Elementary)/REU 클래스 (초등학교)" },
                {  time: "1:00pm – 2:00pm", service: "REU Classes (Junior)/REU 클래스 (중학교)" },
                {  time: "3:00pm – 4:00pm", service: "Afternoon Sabbath Service/주일 모임" },
                { day: "Sun/일", time: "9:00am – 10:00am", service: "Morning Prayer/아침 모임" },
            ]
        },
        {
            name: "Bercham Church /베르참 교회",
            address: "No. 24, Persiaran Tasek Timur 5, Taman Medan Bercham, 31400 Ipoh, Perak Darul Ridzuan",
            mapLink: "https://maps.app.goo.gl/XB2GZxMM9WSB8aoh7",
            schedule: [
                { day: "Fri/금", time: "7:45pm – 9:00pm", service: "Evening Service/종일 모임" },
                { day: "Sat/토", time: "11:00am – 12:00pm", service: "Morning Sabbath Service/주일 모임" },
                { time: "2:30pm – 3:30pm", service: "Afternoon Sabbath Service/주일 모임" },
                { time: "4:00pm – 5:30pm", service: "REU Classes/REU 클래스" },
                { time: "6:30pm – 8:00pm", service: "Youth Service/ Choir Practice/ 청소년 모임" },
            ]
        }
    ];

    // Helper component for content sections
    const Section = ({id, icon: Icon, title, iconColor, children }) => (
          <section id={id} className="py-12 border-b border-gray-100 scroll-mt-24 animate-fade-in"> 
        <div className="flex items-center mb-6 gap-4">
            <div className={`p-3 rounded-2xl bg-opacity-10 ${iconColor.replace('text-', 'bg-')}`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-serif">{title}</h2>
        </div>
        <div className="space-y-4">{children}</div>
    </section>
    );

    // Helper component for dual language boxes


    const ChurchScheduleTable = ({ church,language }) => (
        <div className={`p-6 rounded-xl shadow-lg border-2 ${church.name.includes('Sungai Siput') ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-gray-200'}`}>
            <h4 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-gray-800">
                <MapPin className="w-5 h-5 text-indigo-500" />
                {church.name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">{church.address}</p>
            <a href={church.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 mb-4">
                {language === 'en' ? 'View on Google Maps' : 'Google 맵에서 보기'} <ExternalLink size={13} className="inline mb-0.5" />
            </a>
            
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">{language === 'en' ? 'Day' : '요일'}</th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">{language === 'en' ? 'Time' : '시간'}</th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">{language === 'en' ? 'Service / Class' : '예배 / 수업'}</th>
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
// Main App component which is the default export
const App = () => {
     const [language, setLanguage] = React.useState('en');


    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {

        const handleScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
         <div className="w-screen min-h-screen bg-gray-50 font-sans flex justify-center items-start py-8">
            <div className="w-full max-w-7xl mx-2 sm:mx-8 bg-yellow-50 shadow-2xl rounded-2xl">
                <NavigationTabs language={language} scrolled={scrolled} setLanguage={setLanguage} />
                {/* Header Section */}
               <header className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white text-center px-4 overflow-hidden">

                <div className="absolute inset-0 z-0">

                    <div className="absolute inset-0 bg-black/50 z-10" />

                    <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop" alt="Ipoh Background" className="w-full h-full object-cover" />

                </div>

                

                <div className="relative z-20 max-w-4xl animate-fade-in">

                    <Heart className="w-12 h-12 mx-auto mb-6 text-pink-400 fill-pink-400" />

                    <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-4 uppercase">

                        {language === 'en' ? 'Guest Travel Information' : '하객 여행 안내'}
               </p>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">

                        {language === 'en' ? "Shiro & Yae Min's Wedding" : "Shiro & 조예민 결혼식"}

                    </h1>

                    <p className="text-xl md:text-2xl font-light mb-8 italic">

                        {language === 'en' ? 'Sunday, 22 March 2026' : '2026년 3월 22일 일요일'}

                    </p>

                    <CountdownTimer language={language} />

                </div>

            </header>



                    
                    {/**<div className="p-3 sm:px-8 pt-4 pb-0">
                    <LanguageSwitcher language={language} setLanguage={setLanguage} />
                    </div>*/}
                    
                <main className="p-3 sm:p-8 pt-0 pb-8">                    

                    {/* Welcome Section */}
                    <Section id="welcome" icon={Heart} title={language === 'en' ? "Welcome to Malaysia" : "말레이시아 환영"}  iconColor="text-pink-500">
                        <LanguageBox
                            language={language}
                              enContent={<p>We are deeply grateful that you are travelling from afar to celebrate this joyful occasion with us. To assist in your travel planning, we have prepared the following information and recommendations.</p>}
                            koContent={<p>먼 길을 오셔서 저희의 소중한 날을 함께 축하해 주심에 진심으로 감사드립니다. 하객 여러분의 여행 준비에 도움이 될 수 있도록 아래와 같이 안내드립니다.</p>}
                        />
                    </Section>

                    {/* Airport Section */}
                    <Section id="airport" icon={Plane}  title={language === 'en' ? "Getting to Malaysia (Airport Information)" : "말레이시아 도착 (공항 정보)"} iconColor="text-indigo-400">
                        <LanguageBox
                            language={language}
                            enContent={
                                <>
                                    <p className="font-bold text-gray-700">Nearest International Airport:</p>
                                    <p>Kuala Lumpur International Airport (KLIA / KLIA2) – approximately 2.5 to 3 hours by car to Ipoh / Sungai Siput.</p>
                                    <p className="font-bold text-gray-700 mt-4">Nearest Local Airport:</p>
                                    <p>Sultan Azlan Shah Airport in Ipoh (IPH) – about 1 hour by car to True Jesus Church Sungai Siput.</p>
                                </>
                            }
                            koContent={
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
                    <Section id="visa" icon={BookUser} title={language === 'en' ? "Visa Information and Entry Requirements" : "비자 및 입국 요구 사항"}iconColor="text-yellow-600">
                        <LanguageBox
                            language={language}
                            enContent={
                                <ul className="list-disc ml-6 space-y-2">
                                  <li>Most guests (Korea, New Zealand, etc.) may enter Malaysia visa-free for short stays. Please confirm the latest regulations prior to departure.</li>
                                  <li>Ensure your passport is valid for at least 6 months from the date you exit Malaysia.</li>
                                  <li>Foreign nationals must complete the <span className="font-bold">Malaysia Digital Arrival Card (MDAC)</span> prior to arrival (within 3 days before arrival): <a href="https://imigresen-online.imi.gov.my/mdac/main" target="_blank" className="text-blue-600 hover:underline">MDAC Registration <ExternalLink size={13} className="inline mb-0.5" /></a>.</li>
                                </ul>
                            }
                            koContent={
                                <ul className="list-disc ml-6 space-y-2">
                                  <li>대한민국, 뉴질랜드 등 대부분의 국가는 단기 체류 시 무비자 입국이 가능합니다. 최신 입국 규정을 한 번 더 확인하시기 바랍니다.</li>
                                  <li>말레이시아 출국일로부터 여권 유효기간이 최소 6 개월 이상 남아 있는지 확인하십시오.</li>
                                  <li>외국인은 말레이시아 도착 전에 <span className="font-bold">말레이시아 디지털 입국 카드(MDAC)</span>를 작성해야 합니다 (입국일 기준 3 일 전부터 작성 가능): <a href="https://imigresen-online.imi.gov.my/mdac/main" target="_blank" className="text-blue-600 hover:underline">MDAC 작성 <ExternalLink size={13} className="inline mb-0.5" /></a>.</li>
                                </ul>
                            }
                        />
                    </Section>

                    {/* Travel Section */}
                    <Section id="travel"  icon={TrainFront} title={language === 'en' ? "Travel to Sungai Siput / Ipoh (Holiday Congestion Alert!)" : "송가이시풋/이포 여행 (공휴일 교통拥旺 경고!)"} iconColor="text-red-600">
                        <LanguageBox
                            language={language}
                            enContent={
                                <>
                                    <p className="font-bold text-red-600 mb-2">Warning: March 21-22 is a major holiday, causing severe traffic congestion on the KL-Ipoh route. So if you are travelling by car or bus, travel time will take
much longer than usual and the Kuala Lumpur-Ipoh route can get really busy. </p>
                                    <p className="font-bold mt-3">Travel Options:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li><span className="font-semibold">By Car:</span> Approx 3 hours (will be much longer during the holiday).</li>
                                        <li><span className="font-semibold">By Train (ETS):</span> KL Sentral to Ipoh (2.5 hours). <a href="https://online.ktmb.com.my" target="_blank" className="text-blue-600 hover:underline">Book ETS Tickets</a></li>
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
                            koContent={
                                <>
                                    <p className="font-bold text-red-600 mb-2">주의: 3월 21-22일은 주요 공휴일로, KL-이포 노선에 심각한 교통 체증이 예상됩니다. 
                                      따라서 자동차나 버스로 이동하시는 경우 평소보다 이동 시간이 훨씬 길어지고 쿠알라룸푸르-이포 노선이 매우 혼잡할 수 있습니다. </p>
                                    <p className="font-bold mt-3">이동 방법:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li><span className="font-semibold">자가용:</span> 약 3 시간 소요 (공휴일 기간에는 훨씬 길어집니다).</li>
                                        <li><span className="font-semibold">기차(ETS):</span> KL Sentral → Ipoh Station (2.5 시간). <a href="https://online.ktmb.com.my" target="_blank" className="text-blue-600 hover:underline">ETS 예약</a></li>
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
                        <CurrencyConverter language={language} />
                    </Section>

                    {/* Accommodation Section */}
                    <Section id="accommodation" icon={Hotel} title={language === 'en' ? "Accommodation" : "숙소"} iconColor="text-teal-600">
                        <LanguageBox
                            language={language}
                            enContent={
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
                            koContent={
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
                    <Section id="experience" icon={Coffee} title={language === 'en' ? "Things to Experience in Ipoh" : "이포에서 체험할 것"} iconColor="text-amber-600">
                        <LanguageBox
                            language={language}
                            enContent={
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Explore <strong>Ipoh Old Town</strong> (heritage buildings, famous white coffee).</li>
                                    <li>Visit <strong>Kek Lok Tong Cave Temple</strong> or <strong>Kellie’s Castle</strong>.</li>
                                    <li>Savour local specialties: <strong>Ipoh Hor Fun, Bean Sprout Chicken, and Salted Chicken</strong>.</li>
                                </ul>
                            }
                            koContent={
                                <ul className="list-disc ml-6 space-y-2">
                                    <li><strong>이포 올드타운 산책</strong> (유서 깊은 건물, 유명 화이트 커피 카페 탐방)</li>
                                    <li><strong>극락동 (Kek Lok Tong) 석굴사원</strong> 또는 <strong>켈리 캐슬 (Kellie’s Castle) 관람</strong></li>
                                    <li>추천 음식: <strong>이포 호펀, 숙주 닭, 소금구이 닭</strong></li>
                                </ul>
                            }
                        />
                    </Section>

                    {/* Service Schedule Section */}
                    <Section id="schedule" icon={MapPin} title={language === 'en' ? "Service Schedule of True Jesus Churches in the area" : "지역의 진정 교회의 예배 일정"} iconColor="text-purple-600">
                        <p className="text-sm italic text-gray-600 mb-6">
                            *{language === 'en' ? "The service times are subject to change. Please confirm locally if necessary." : "예배 시간은 변경될 수 있습니다. 필요하다면 현지에 문의해 주세요."}
                        </p>
                        
                        <div className="space-y-8">
                            {churches.map((church, index) => (
                                <ChurchScheduleTable key={index} language={language} church={church} />
                            ))}
                        </div>
                    </Section>
                    
                    {/* Google Form Section */}
                    <div id ="rsvp" className="py-6 last:border-b-0 scroll-mt-20">
                        <div className="flex items-center mb-4 gap-3">
                            <CheckCircle className="w-6 h-6 text-pink-600" />
                            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800">
                                {language === 'en' ? 'RSVP and Travel Confirmation' : 'RSVP 및 여행 확인'}
                            </h2>
                        </div>
                        
                    <div id="rsvp" className="mt-20 p-12 bg-indigo-900 rounded-[3rem] text-white text-center shadow-2xl">
                    <Heart className="w-12 h-12 mx-auto mb-6 text-pink-400 fill-pink-400" />
                    <h3 className="text-3xl font-serif font-bold mb-4">
                        {language === 'en' ? "Are you coming?" : "함께해 주시겠어요?"}
                    </h3>
                    <p className="text-indigo-200 mb-8 max-w-md mx-auto">
                        {language === 'en' 
                            ? "Please let us know your travel plans and attendance status by confirming through the form below."
                            : "준비에 큰 도움이 될 수 있도록 아래 버튼을 통해 참석 여부와 여행 계획을 알려주세요."}
                    </p>
                    <a href={contact.formLink} target="_blank" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95">
                        <CheckCircle size={20}/> {language === 'en' ? "RSVP / Confirm Now" : "참석 확인하기"}
                    </a>
                </div>
                </div>
                    {/* Contact Section */}
                    <div className="pt-6">
                        <div className="flex items-center mb-4 gap-3">
                            <Mail className="w-6 h-6 text-gray-700" />
                            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800">{language==='en' ? 'Contact Us' : '문의 및 연락처'}</h2>
                        </div>
                        
                        <p className="text-gray-700 mb-6">
                          {language==='en' ? 'For any questions regarding travel or local arrangements, please do not hesitate to reach out.' : '여행 또는 현지 관련 문의가 있으시면 편하게 연락 주세요.'}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg shadow-sm">
                                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                                <span >Email: <a href={`mailto:${contact.email}`} className="font-medium hover:underline">{contact.email}</a></span>
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
                        
                    </div>

                </main>
                <footer className="py-12 text-center text-gray-400 text-sm">
                <p>&copy; 2026 Shiro & Yae Min. We sincerely look forward to sharing this special day with you in Malaysia.<br />
                          감사와 사랑의 마음을 담아, Shiro 와 예민 드림.</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a href={`mailto:${contact.email}`} className="hover:text-indigo-600 transition-colors"><Mail size={18}/></a>
                    <a href={`tel:${contact.shiroPhone}`} className="hover:text-indigo-600 transition-colors"><Phone size={18}/></a>
                </div>
            </footer>
            <BackToTopAndRsvpButton language={language} formLink={contact.formLink} setLanguage={setLanguage}/>
            </div>
              
        </div>
    );
};

export default App