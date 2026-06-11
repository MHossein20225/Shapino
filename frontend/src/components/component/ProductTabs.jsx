import { useState } from "react";

export default function ProductTabs({comments = null, description}) {
    const [activeTab, setActiveTab] = useState("description");

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

                        <div className="space-y-4">

                            {/* Comment 1 */}
                            <div className="border rounded-lg p-4">
                                <div className="flex justify-between">
                                    <span className="font-medium">
                                        کاربر 1
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        2 روز پیش
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    محصول خیلی خوب بود 👍
                                </p>
                            </div>

                            {/* Comment 2 */}
                            <div className="border rounded-lg p-4">
                                <div className="flex justify-between">
                                    <span className="font-medium">
                                        کاربر 2
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        1 هفته پیش
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    کیفیتش نسبت به قیمت عالیه
                                </p>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}