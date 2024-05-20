export default function HomePage() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center bg-blue-500 w-full h-[320px] rounded-md">
        <h1 className="text-2xl font-semibold text-white">Home</h1>
      </div>

      <div className="my-6">
        <h2 className="my-3 text-2xl font-semibold">Posts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="p-4 border rounded-md shadow-md">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, magni?
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
