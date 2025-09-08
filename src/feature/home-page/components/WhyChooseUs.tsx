export default function AboutInstructor() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <p className="text-[#E63946] font-semibold">ABOUT</p>
        <h2 className="text-4xl font-bold my-4">Shwetabh Gangwar</h2>
        <p className="text-gray-400 font-semibold">
          AUTHOR, MOTIVATIONAL SPEAKER
        </p>
        <p className="text-gray-400 mb-6">
          Shwetabh Gangwar is a prominent personality...
        </p>
        <div className="flex items-center gap-4">
          <p className="font-semibold">Follow Us On:</p>
          {["facebook", "camera_alt", "play_arrow", "alternate_email"].map(
            (icon) => (
              <span
                key={icon}
                className="bg-gray-700 p-2 rounded-full hover:bg-[#E63946]"
              >
                {icon}
              </span>
            )
          )}
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/instructor.jpg"
          alt="Instructor"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
