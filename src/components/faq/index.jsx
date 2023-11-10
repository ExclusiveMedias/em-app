import FaqArea from './faq-area';
import HeaderTwo from '@/src/layout/headers/header-2';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FaqFormArea from './faq-form-area';
import Footer from '@/src/layout/footers/footer';

const Faq = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Frequently Ask Question" sub_title="Have questions? We have compiled a list of answers to the most common queries we receive. Get insights into how we can help streamline your business processes with AI and automation." title="FAQ" />
                <FaqArea showTitle={false}/>
                <FaqFormArea />
            </main>
            <Footer />
        </>
    );
};

export default Faq;