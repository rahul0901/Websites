import React from 'react';
import './Services.css';
import './MediaServices.css';

const Services = () => {

    const serviceCard = [
        { icon: <i class="fa-solid fa-brush fa-3x"></i>, title: "Brand Identity", disclaimer: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint." },
        { icon: <i class="fa-solid fa-bezier-curve fa-3x"></i>, title: "Illustration", disclaimer: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint." },
        { icon: <i class="fa-solid fa-bullhorn fa-3x"></i>, title: "Marketing", disclaimer: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint." },
        { icon: <i class="fa-solid fa-earth-asia fa-3x"></i>, title: "Web Design", disclaimer: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint." },
        { icon: <i class="fa-solid fa-cube fa-3x"></i>, title: "Packaging Design", disclaimer: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint." },
        { icon: <i class="fa-solid fa-window-maximize fa-3x"></i>, title: "Web Development", disclaimer: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint." }
    ];

    return (
        <>
            <div className="screen-services" id='service'>
                <div className="services-parent">
                    <div className="services-head">
                        <span>WHAT WE DO</span>
                        <h2>We’ve got everything you need to launch and grow your business
                        </h2>
                    </div>
                    <div className="services-card-main-parent">
                        {serviceCard?.length ? <div className="service-card-parent">
                            {serviceCard.map((item, i) => (
                                <div className="services-card-child" key={i}>
                                    <div className="services-child-left">
                                        <a href="">{item.icon}</a>
                                    </div>
                                    <div className="services-child-right">
                                        <span>{item.title}</span>
                                        <p>{item.disclaimer}</p>
                                    </div>
                                </div>
                            ))}
                        </div> : <div>Loading..</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;