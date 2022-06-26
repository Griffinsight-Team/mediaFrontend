import React from "react";
import ReactPlayer from "react-player";

export default function FooterMob() {
    return (
        <>
            <div className="footerMob">
                <div>
                    <ReactPlayer
                        width="inherit"
                        url="https://www.youtube.com/watch?v=LFx_d2d3ZH4"
                        controls={true}
                    />
                </div>

                <p>Made with ❤️ by techies at Griffinsight</p>
                <p>© 2022 Griffinsight, IIT Mandi</p>
            </div>
        </>
    );
}
