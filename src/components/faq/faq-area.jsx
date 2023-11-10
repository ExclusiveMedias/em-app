import React from 'react';


const faq_content = {
    title: "Frequently Asked Questions",
    sm_des: <>Have questions? We have compiled a list of answers to the most common queries we receive. Get insights into how we can help streamline your business processes with AI and automation.</>,
  
    digital_marketing: [
        {
          id: 1,
          question: "What is AI-driven digital marketing?",
          answer: <>AI-driven digital marketing uses artificial intelligence technologies to analyze consumer behavior, automate ad campaigns, and personalize content delivery to enhance marketing efforts.</>,
          accordion_id: "digitalOne",
          collapsed: "", 
          aria_expanded: true, 
          show: "show"
        },
        {
          id: 2,
          question: "How can AI improve my company's social media strategy?",
          answer: <>AI can optimize your social media strategy by analyzing large datasets to identify trends, suggest optimal posting times, and personalize content for your target audience to increase engagement.</>,
          accordion_id: "digitalTwo",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 3,
          question: "Can AI help in understanding customer sentiments?",
          answer: <>Yes, AI technologies like natural language processing can monitor and analyze customer feedback across multiple platforms to gauge sentiment, providing valuable insights into customer satisfaction.</>,
          accordion_id: "digitalThree",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 4,
          question: "What are the benefits of using chatbots in digital marketing?",
          answer: <>Chatbots provide instant customer service, engage users in interactive conversations, and gather data on customer preferences, which can lead to improved customer experiences and conversion rates.</>,
          accordion_id: "digitalFour",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 5,
          question: "How can AI optimize email marketing campaigns?",
          answer: <>AI can personalize email content for each recipient, predict the best sending times, segment email lists, and test different email campaign strategies to improve open rates and conversions.</>,
          accordion_id: "digitalFive",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 6,
          question: "In what ways can AI enhance online advertising?",
          answer: <>AI can optimize online advertising by automating ad placements, targeting specific user profiles with high precision, and continuously learning and adapting from user interactions to improve ROI.</>,
          accordion_id: "digitalSix",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 7,
          question: "What role does AI play in content marketing?",
          answer: <>AI assists in content marketing by identifying trending topics, suggesting content improvements, generating content ideas, and even writing initial drafts, thus speeding up content creation.</>,
          accordion_id: "digitalSeven",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 8,
          question: "How does predictive analytics help in digital marketing?",
          answer: <>Predictive analytics uses AI to forecast future customer behaviors based on historical data, enabling marketers to craft proactive strategies that resonate with the audience's future needs.</>,
          accordion_id: "digitalEight",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 9,
          question: "Can AI help in SEO and if so, how?",
          answer: <>AI enhances SEO by providing insights into search trends, optimizing keyword research, offering content recommendations, and automating tasks to improve search rankings more efficiently.</>,
          accordion_id: "digitalNine",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
        {
          id: 10,
          question: "What is programmatic advertising and how does AI improve it?",
          answer: <>Programmatic advertising is the automated buying and selling of online advertising space. AI improves this process by analyzing user data to make real-time bidding decisions, maximizing ad performance and budget efficiency.</>,
          accordion_id: "digitalTen",
          collapsed: "collapsed", 
          aria_expanded: false, 
          show: ""
        },
      ],
      
  
    improve_business: [
      {
        id: 1,
        question: "How can AI integration improve my business efficiency?",
        answer: <>AI integration automates routine tasks, providing your team more time to focus on strategic work. This enhances productivity and overall business efficiency.</>,
        accordion_id: "One",
        collapsed: "",
        aria_expanded: true,
        show: "show"
      },
      {
        id: 2,
        question: "What kind of bots can Exclusive Medias, LLC develop for my company?",
        answer: <>We specialize in developing custom bots for customer service, lead generation, and operational automation tailored to your specific business needs.</>,
        accordion_id: "Two",
        collapsed: "collapsed",
        aria_expanded: false,
        show: ""
      },
      {
        id: 3,
        question: "Can your services help in personalizing customer experiences?",
        answer: <>Absolutely! Our AI-driven solutions analyze customer data to deliver personalized marketing campaigns and recommendations, enhancing customer engagement.</>,
        accordion_id: "Three",
        collapsed: "collapsed",
        aria_expanded: false,
        show: ""
      },
      {
        id: 4,
        question: "Do you offer educational courses or workshops on AI and automation?",
        answer: <>Yes, we provide comprehensive courses and hands-on workshops to help your team upskill and stay abreast of the latest in AI and automation technologies.</>,
        accordion_id: "Four",
        collapsed: "collapsed",
        aria_expanded: false,
        show: ""
      },
      {
        id: 5,
        question: "How does AI help in making data-driven decisions?",
        answer: <>AI algorithms process and analyze large datasets quickly to provide real-time insights and forecasts, supporting informed decision-making.</>,
        accordion_id: "Five",
        collapsed: "collapsed",
        aria_expanded: false,
        show: ""
      },
      // ... Add 5 more Q&As tailored to improving business with AI and automation
    ],
  }
  
const {title, sm_des, digital_marketing, improve_business}  = faq_content

const FaqArea = ({showTitle}) => {
    return (
        <>
            <section className="inner-faq-area pt-125 pb-125">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            {showTitle && 
                            <div className="section-title inner-faq-title mb-70">
                                <h2>{title}</h2>
                                <p>{sm_des}</p>
                            </div>
                            }

                            <div className="faq-wrapper inner-faq-wrapper pb-130">
                                <h3><i className="fal fa-cube"></i> Digital Marketing</h3>

                                <div className="faq-accordion">
                                    <div className="accordion" id="accordionExample">
                                    {digital_marketing.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                        <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                            <button
                                            className={`accordion-button ${item.collapsed}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${item.accordion_id}`}
                                            aria-expanded={item.aria_expanded}
                                            aria-controls={`collapse${item.accordion_id}`}
                                            >
                                            {item.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${item.accordion_id}`}
                                            className={`accordion-collapse collapse ${item.show}`}
                                            aria-labelledby={`heading${item.accordion_id}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-content">
                                            <p>{item.answer}</p>
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                                </div> 
                            </div>

                            <div className="faq-wrapper inner-faq-wrapper">
                            <h3><i className="fal fa-cube"></i> How To Improve Your Business</h3>

                                <div className="faq-accordion">
                                    <div className="accordion" id="accordionExample2">
                                    {improve_business.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                        <h2 className="accordion-header" id={`heading${item.accordion_id}2`}>
                                            <button
                                            className={`accordion-button ${item.collapsed}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${item.accordion_id}2`}
                                            aria-expanded={item.aria_expanded}
                                            aria-controls={`collapse${item.accordion_id}2`}
                                            >
                                            {item.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${item.accordion_id}2`}
                                            className={`accordion-collapse collapse ${item.show}`}
                                            aria-labelledby={`heading${item.accordion_id}2`}
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-content">
                                            <p>{item.answer}</p>
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqArea;