import React from 'react'

const Features = () => {
  return (
    <article className="features">
            <div className="iphone-image-container">
                <img className="iphone-image" src={`${import.meta.env.BASE_URL}Images/iphone12features.svg`} alt="iphone 12"/>
            </div>
            <section className="appFeatures">
                <h2>App Features</h2>
                <p className="lorem-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                <div className="featuresContent">
                    <section className="featuresSection" id="section-1">
                        <div className="img-container-features">
                            <img src={`${import.meta.env.BASE_URL}Images/credit-card.svg`} alt="credit-card icon" className="icon-img"/>
                        </div>
                        <h3>Easy Payments</h3>
                        <p className="features-text" >Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </section>
                    <section className="featuresSection" id="section-2">
                        <div className="img-container-features">
                            <img src={`${import.meta.env.BASE_URL}Images/shield.svg`} alt="shield icon" className="icon-img"/>
                        </div> 
                        <h3>Data Security</h3>
                        <p className="features-text" >Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </section>
                    <section className="featuresSection" id="section-3">
                        <div className="img-container-features">
                            <img src={`${import.meta.env.BASE_URL}Images/bars-graphic.svg`} alt="bars-graphic icon" className="icon-img"/>
                        </div>
                        <h3>Cost Statistics</h3>
                        <p className="features-text" >Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </section>
                    <section className="featuresSection" id="section-4">
                        <div className="img-container-features">
                            <img src={`${import.meta.env.BASE_URL}Images/communication.svg`} alt="communication icon" className="icon-img"/>
                        </div>
                        <h3>Support 24/7</h3>
                        <p className="features-text" >A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </section>
                    <section className="featuresSection" id="section-5">
                        <div className="img-container-features">
                            <img src={`${import.meta.env.BASE_URL}Images/wallet.svg`} alt="wallet icon" className="icon-img"/>
                        </div>
                        <h3>Regular Cashback</h3>
                        <p className="features-text" >Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </section>
                    <section className="featuresSection" id="section-6">
                        <div className="img-container-features">
                            <img src={`${import.meta.env.BASE_URL}Images/happy.svg`} alt="happy icon" className="icon-img"/>
                        </div>
                        <h3>Top Standards</h3>
                        <p className="features-text" >Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </section>
                </div>
            </section>
        </article>
  )
}

export default Features