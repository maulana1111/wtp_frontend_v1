import {Fragment} from "react";

export default function ButtonLoader() {
    return (
        <div>
            <button className="btn btn-success">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...
            </button>
        </div>
    )
}