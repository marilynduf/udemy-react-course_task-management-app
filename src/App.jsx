import SidebarProject from "../src/composants/SidebarProject";
import NewProject from "../src/composants/NewProject";

function App() {
    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">
                Marilyn's task managment app
            </h1>
            <div className="flex h-full">
                <SidebarProject />

                <main className="flex-1 p-8">
                    <NewProject />
                </main>
            </div>
        </>
    );
}

export default App;
