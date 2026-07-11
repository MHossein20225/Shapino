import { useState } from "react";
import ReplyCard from "./ReplyCard.jsx";
import {getReplies} from "../../util/requestFunctions.jsx";
import {useQuery} from "@tanstack/react-query";

export default function CommentCard({id, userName, comment, addedTime}) {
    const [showReplies, setShowReplies] = useState(false);
    const [reply, setReply] = useState("");

    const {data: replies} = useQuery({
        queryKey:["replies", id],
        queryFn: () => getReplies(id)
    })
    console.log(replies)
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-between">
                <span className="font-medium">{userName}</span>

                <span className="text-sm text-gray-500">
                    {addedTime}
                </span>
            </div>

            <p className="mt-2 text-gray-600">
                {comment}
            </p>

            <button
                onClick={() => setShowReplies(!showReplies)}
                className="mt-3 text-(--primary) text-sm hover:underline"
            >
                {showReplies
                    ? "مخفی کردن پاسخ‌ها"
                    : ` نمایش پاسخ‌ها ${2} `}
            </button>

            <div className="mt-4 mr-8 border-r-2 border-gray-200 pr-4 space-y-3">
                {showReplies && replies?.map(reply => (
                    <ReplyCard
                        reply={reply}
                    />
                ))}

                {showReplies && (
                    <form method="POST" className="pt-2">
                        <textarea
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            placeholder="پاسخ خود را بنویسید..."
                            className="w-full border rounded-md p-2"
                        />

                        <button
                            type="submit"
                            className="mt-2 bg-(--primary) text-white px-4 py-2 rounded-lg"
                        >
                            ثبت پاسخ
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}