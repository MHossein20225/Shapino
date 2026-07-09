import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {addComment} from "../../util/requestFunctions.jsx";
import {queryClient} from "../../main.jsx";
import {commentValidation} from "../../util/validations.jsx";

export default function CommentForm({productId}){
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    const mutation = useMutation({
        mutationFn: () => addComment(productId, comment),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["comments", productId],
            })
        }
    });




    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const dataValidate = commentValidation({ comment });
                if (dataValidate === true) {
                    setError("");
                    mutation.mutate();
                } else {
                    setError(dataValidate);
                }
            }}
            method="POST"
        >
             <textarea
                 value={comment}
                 onChange={(e) => setComment(e.target.value)}
                 placeholder="نظر خود را بنویسید..."
                 className="w-full border rounded-lg p-3"
             />
            {error && (
                <p className="mt-2 text-sm text-red-500">
                    {error}
                </p>
            )}
            <button
                type="submit"
                className="mt-3 bg-(--primary) text-white px-5 py-2 rounded-lg"
            >
                {
                    mutation.isPending ? <div
                        className="w-5 h-5 border-4 border-gray-300 border-t-(--primary) rounded-full animate-spin"></div>
                        : "ثبت نظر"
                }

            </button>
        </form>
    )
}