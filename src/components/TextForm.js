import React from 'react'

export default function textarea() {
    return (
        <div>
        <div className="mb-3">
            <label for="mybox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="mybox" rows="3"></textarea>
        </div>
        </div>
    )
}
