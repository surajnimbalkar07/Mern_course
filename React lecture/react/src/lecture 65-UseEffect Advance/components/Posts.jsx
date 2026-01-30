import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);




    //reusable fetching logic: so it will be used in other action too like call when button click

    async function fetchUsers() {
        setLoading(true);
        try {
            const res = await axios.get("https://dummyjson.com/posts");
            setPosts(res.data.posts);
        } catch (error) {
            console.log("Error loading posts", error);
        } finally {
            setLoading(false);
        }
    }


    //useEffect with an empty dependency array([]) runs once when the component mounts.
    //That means as soon as the page loads, fetchUsers() is called automatically.
    //So even if you don’t click “Load Posts,” the posts are fetched and displayed.
    
    useEffect(() => {
        fetchUsers()
    }, []);

    // here while typing the text in any input box, we want to fetch data based on this search term,
    // this is not a suitable way as it will trigger an API call for each letter user types, for ex, it will run for
    // v, va, vai, vaib... and so on. We don't want this because this will introduce a race condition which will make 
    // multiple API calls but will not know which will end when.
    // We should always avoid this, and instead use debouncing for such tasks


    //   useEffect(() => {
    //     async function asynchronousCode() {
    //       const someData = await someFunctionToFetchData(searchTerm);
    //       //www.google.com/?search=rohanih
    //       setSomeState(someData);
    //     }
    //     asynchronousCode();
    //   }, [searchTerm]);

    //This will run infinite times:
    //   useEffect(() => {
    //     setLoading(false);
    //   }, [loading]);

    //     Flow:

    // loading changes → effect runs

    // effect calls setLoading(false)
    // loading changes again
    // effect runs again
    // repeat forever 🔁

    // Rule to Remember

    // 👉 If you update a state inside useEffect,
    // 👉 That state should NOT be in dependency array (unless intentional).



    useEffect(() => {
        document.title = `${notificationCount ? "(" + notificationCount + ")" : ""} Whatsapp`;
    }, [notificationCount]);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-3xl mx-auto">

                {/* Actions */}
                <div className="flex gap-3 mb-6">
                    <button
                        onClick={() => setNotificationCount((prev) => prev + 1)}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
                    >
                        Increase
                    </button>

                    <button
                        onClick={() => setNotificationCount((prev) => prev - 1)}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
                    >
                        Decrease
                    </button>

                    <button
                        onClick={fetchUsers}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Load Posts
                    </button>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    {posts.length ? (
                        posts.map((post, ind) => (
                            <div
                                key={ind}
                                className="border border-gray-200 bg-white p-4 rounded"
                            >
                                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    {post.body}
                                </p>
                            </div>
                        ))
                    ) : loading ? (
                        <p className="text-sm text-gray-500">Loading posts...</p>
                    ) : (
                        <p className="text-sm text-gray-500">
                            Click “Load Posts” to see posts
                        </p>
                    )}
                </div>

            </div>
        </div>
    );


}

export default Posts;