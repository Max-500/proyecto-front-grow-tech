import Consejo1 from "../assets/Primer Consejo.svg"
import Consejo2 from "../assets/Segundo Consejo.svg"
import Consejo3 from "../assets/Tercer Consejo.svg"
import Consejo4 from "../assets/Cuarto Consejo.svg"

const Advices = () => {
    return (
        <>
            <div className="padre-plantas">
                <div className="consejos">

                    <div className="consejo">
                        <div className="imagen-consejo">
                            <img src={Consejo1} alt="Primer Consejo" />
                        </div>
                        <div className="texto-consejo">
                            <h2>Lorem ipsum dolor sit amet consectetur, adipiscing elit enim dictum.</h2>
                            <br />
                            <p>
                                Quis nam tempus per luctus molestie sollicitudin quam, lectus etiam volutpat odio accumsan enim venenatis consequat, blandit mus ligula pellentesque ridiculus congue.
                                Magnis ad tempor tincidunt aliquam eget senectus nibh auctor curae, mi vehicula mollis dignissim nam nulla bibendum duis torquent, facilisis ligula ut malesuada fames suscipit phasellus penatibus.
                            </p>
                            <br />
                            <p>Segundo parrafo</p>
                        </div>
                    </div>

                    <div className="consejo">
                        <div className="texto-consejo">
                            <h2>Lorem ipsum dolor sit amet consectetur, adipiscing elit enim dictum.</h2>
                            <br />
                            <p>
                                Quis nam tempus per luctus molestie sollicitudin quam, lectus etiam volutpat odio accumsan enim venenatis consequat, blandit mus ligula pellentesque ridiculus congue.
                                Magnis ad tempor tincidunt aliquam eget senectus nibh auctor curae, mi vehicula mollis dignissim nam nulla bibendum duis torquent, facilisis ligula ut malesuada fames suscipit phasellus penatibus.
                            </p>
                            <br />
                            <p>Segundo parrafo</p>
                        </div>
                        <div className="imagen-consejo">
                            <img src={Consejo2} alt="Primer Consejo" />
                        </div>
                    </div>

                    <div className="consejo">
                        <div className="imagen-consejo">
                            <img src={Consejo3} alt="Primer Consejo" />
                        </div>
                        <div className="texto-consejo">
                            <h2>Lorem ipsum dolor sit amet consectetur, adipiscing elit enim dictum.</h2>
                            <br />
                            <p>
                                Quis nam tempus per luctus molestie sollicitudin quam, lectus etiam volutpat odio accumsan enim venenatis consequat, blandit mus ligula pellentesque ridiculus congue.
                                Magnis ad tempor tincidunt aliquam eget senectus nibh auctor curae, mi vehicula mollis dignissim nam nulla bibendum duis torquent, facilisis ligula ut malesuada fames suscipit phasellus penatibus.
                            </p>
                            <br />
                            <p>Segundo parrafo</p>
                        </div>
                    </div>

                    <div className="consejo">
                        <div className="texto-consejo">
                            <h2>Lorem ipsum dolor sit amet consectetur, adipiscing elit enim dictum.</h2>
                            <br />
                            <p>
                                Quis nam tempus per luctus molestie sollicitudin quam, lectus etiam volutpat odio accumsan enim venenatis consequat, blandit mus ligula pellentesque ridiculus congue.
                                Magnis ad tempor tincidunt aliquam eget senectus nibh auctor curae, mi vehicula mollis dignissim nam nulla bibendum duis torquent, facilisis ligula ut malesuada fames suscipit phasellus penatibus.
                            </p>
                            <br />
                            <p>Segundo parrafo</p>
                        </div>
                        <div className="imagen-consejo">
                            <img src={Consejo4} alt="Primer Consejo" />
                        </div>
                    </div>

                    <div className="ultimo-consejo">
                        <h2>Mus ligula mattis fringilla tellus, auctor habitant vel.</h2>
                        <br />
                        <p>
                            Aliquet volutpat magnis pretium urna pulvinar massa eu congue blandit nec, penatibus natoque habitasse fusce ullamcorper cursus mi sagittis leo purus faucibus, maecenas curabitur posuere mus venenatis fringilla cras rutrum ridiculus.
                            Nam condimentum ullamcorper nisi pulvinar volutpat, suscipit gravida hac ad enim purus, sodales et himenaeos faucibus.
                            Suscipit felis dictum ultrices sed eu quam dictumst metus leo, tortor donec habitant sodales curabitur id placerat est, nascetur tempor tristique condimentum imperdiet facilisis cum aliquet.
                            Dictumst netus dis iaculis sollicitudin viverra porta justo morbi sem eget, a laoreet facilisi velit nibh blandit platea id nec.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advices;
