import Head from "next/head";
import * as React from "react";

const about:React.FC = () => {
    return (
        <div>
            <Head children={<h1>needs-children</h1>}>
                <title>About</title>
            </Head>
            <h1>About</h1>
        </div>
    )
}

export default about;