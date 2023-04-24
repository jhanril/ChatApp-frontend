import React from 'react'
import ChatViewList from './ChatViewList'

export default function ChatView() {
    return (
    <div class="col-md-6 col-lg-7 col-xl-7">
        <div className="card">
            <div className="card-body">
            <ChatViewList />
            <div class="bg-white mb-3">
                <div class="form-outline">
                <textarea class="form-control" id="textAreaExample2" rows="4"></textarea>
                <label class="form-label" for="textAreaExample2" style={{ marginLeft: "0px" }}>Message</label>
                <div class="form-notch"><div class="form-notch-leading"  style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "60px" }}></div><div class="form-notch-trailing"></div></div></div>
            </div>
            <button type="button" class="btn btn-info btn-rounded float-end">Send</button>
            </div>
            </div>
        </div>
    )
}