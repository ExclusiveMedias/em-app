import Image from 'next/image'; 
import logo_img from "@assets/img/logo/logo.png";
import Link from 'next/link';

const ComingSoonHeader = () => {
    return (
        <>
            <header className="header-transparent header-coming-soon">
                <div className="header-area">
                    <div className="container">
                        <div className="position-relative">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo2">
                                        <Link href="/"> <Image src={logo_img} alt="logo" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default ComingSoonHeader;