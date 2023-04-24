import React from "react";

export default function ChatMember({ name, message, time, notification }) {
    return (
        <li className="p-2 border-bottom" style={{ backgroundColor: "#eee" }}>
        <a href="#!" className="d-flex justify-content-between">
            <div className="d-flex flex-row">
            <img
                src={`https://img.icons8.com/color/36/000000/administrator-male.png`}
                alt="avatar"
                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                width="60"
            />
            <div className="pt-1">
                <p className="fw-bold mb-0">{name}</p>
                <p className="small text-muted">{message}</p>
            </div>
            </div>
            <div className="pt-1">
            <p className="small text-muted mb-1">{time}</p>
            {notification && <span className="badge bg-danger float-end">1</span>}
            </div>
        </a>
        </li>
    );
}
