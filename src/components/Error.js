import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();

    console.log("error", error);
    return (
        <div>
            {/* <img src="./../image/error_404_image.png" /> */}
            <h1>Oooopsss !!!!</h1>
            <h1>Something went wrong !!</h1>
            <h2>{error.data}</h2>
        </div>
    )
}

export default Error;