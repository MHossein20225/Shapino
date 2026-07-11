export default function ReplyCard({reply}){
    return(
        <div
            key={reply.id}
            className="bg-gray-50 rounded-lg p-3"
        >
            <div className="flex justify-between">
                <span className="font-medium">
                    {reply.user.username}
                </span>
                <span className="text-xs text-gray-500">
                    {/*{reply.created_at}*/}
                </span>
            </div>
            <p className="mt-2 text-gray-600">
                {reply.body}
            </p>
        </div>
    )
}