import {useActionData, useNavigation} from "react-router-dom";

export default function ShowError(){
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const response = useActionData()
    return(
        <p className={isSubmitting ? "text-gray-600" : "text-red-500"}>
            {isSubmitting ? "صبور باشید .." : response?.error}
        </p>
    )
}