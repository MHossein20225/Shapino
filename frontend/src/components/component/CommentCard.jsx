export default function CommentCard({userName, comment, addedTime}) {
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-between">
                 <span className="font-medium">
                     {userName}
                 </span>
                <span className="text-sm text-gray-500">
                    {addedTime}
                </span>
            </div>
            <p className="text-gray-600 mt-2">
                {comment}
            </p>
        </div>
    )
}