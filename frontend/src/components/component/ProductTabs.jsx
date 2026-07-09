import {useState} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getComment} from "../../util/requestFunctions.jsx";
import CommentForm from "./CommentForm.jsx";
import CommentCard from "./CommentCard.jsx";

export default function ProductTabs({comments = null, description}) {
    const [activeTab, setActiveTab] = useState("description");
    const {id} = useParams();

    const {data} = useQuery({
        queryKey: ["comments", id],
        queryFn: () => getComment(id),
        enabled: activeTab === "comments",
    });
    console.log(data)

    return (
        <div className="mt-16 rounded-xl">

            {/* Tabs Header */}
            <div className="flex">
                <button
                    onClick={() => setActiveTab("description")}
                    className={`flex-1 py-4 text-center font-medium transition ${
                        activeTab === "description"
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500 hover:text-black"
                    }`}
                >
                    توضیحات محصول
                </button>

                <button
                    onClick={() => setActiveTab("comments")}
                    className={`flex-1 py-4 text-center font-medium transition ${
                        activeTab === "comments"
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500 hover:text-black"
                    }`}
                >
                    نظرات کاربران
                </button>
            </div>

            {/* Tabs Content */}
            <div className="p-6">

                {activeTab === "description" && (
                    <div className="text-gray-600 leading-8">
                        <h2 className="text-xl font-bold mb-3">
                            توضیحات محصول
                        </h2>

                        <p>
                            {description}
                        </p>
                    </div>
                )}

                {activeTab === "comments" && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            نظرات کاربران
                        </h2>


                        <CommentForm productId={id}/>

                        <div className="space-y-4 mt-3">
                            {
                                data && data.map((comment) => (
                                    <CommentCard userName={comment.user.username} comment={comment.body} addedTime={comment.created_at} />
                                ))
                            }
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}