import React from "react";
import ChatMember from "./ChatMember";

export default function ChatMembersList() {
    return (
        <ul className="list-unstyled" style={{ backgroundColor: "#eee", maxHeight: "80vh" , overflowY: "auto" }}>
        <ChatMember
            name="John Doe"
            message="Hello, Are you there?"
            time="Just now"
            notification
        />
        <ChatMember
            name="Danny Smith"
            message="Lorem ipsum dolor sit."
            time="5 mins ago"
        />
        <ChatMember
            name="Alex Steward"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Ashley Olsen"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Ashley Olsen"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Ashley Olsen"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Ashley Olsen"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Kate Moss"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Kate Moss"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Kate Moss"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        <ChatMember
            name="Kate Moss"
            message="Lorem ipsum dolor sit."
            time="Yesterday"
        />
        </ul>
    );
}
