import design from "./netflix.module.css";
import logo from "./Netflix-logo.png";
import tv from "./tv.png"
import mobile from "./mobile-0819.jpg"
const Netflix = ()=>{
    
    return(
        <div>
            <section id={design.home}>
            <div className={design.wrap}>
                <div className={design.maxwid}>
                    <nav>
                        <img src={logo} alt="" srcset="" />
                        <div className={design.navbtns}>
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Tamil</option>
                            </select>
                            <button>Sign In</button>
                        </div>
                    </nav>
                    <div className={design.hometext}>
                        <div className={design.text1}>
                            Unlimited movies, TV shows and more.
                        </div>
                        <div className={design.text2}>
                            Watch anywhere. Cancel anytime.
                        </div>
                        <div className={design.text3}>
                            Ready to watch? Enter your email to create or restart your membership.
                        </div>
                        <div className={design.inp}>
                            <input type="email"  placeholder="Email address" />
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className={design.grey}></div>
        <section className={design.tv}>
            <div className={design.maxwid}>
                <div className={design.tvtext}>
                    <div className={design.tvtext1}>Enjoy on your TV.</div>
                    <div className={design.tvtext2}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                </div>
                <div className={design.tvimg}>
                    <img src={tv} alt="" />
                </div>
            </div>
        </section>
        <div className={design.grey}></div>
        <section className={design.stran}>
            <div className={design.maxwid}>
                <div className={design.stranimg}>
                    <img src={mobile} alt="" />
                </div>
                <div className={design.strtext}>
                    <div className={design.strtext1}>Download your shows to watch offline.</div>
                    <div className={design.strtext2}>Save your favourites easily and always have something to watch.</div>
                </div>
            </div>
        </section>
     </div>
    )
}
export default Netflix;