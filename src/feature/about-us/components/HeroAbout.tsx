export default function HeroAbout() {
  return (
    <section
      className="flex rounded-2xl flex-col justify-center items-center text-center px-4 py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7Pmn1b5gSHNd-qW9Cv31JTjWGdhz3izPHnDb87ycAq64GMH8xp260AQcRKhDcfZkXi5ZKyTDe2m4ek7bIXqwdN9hThrFnBpxiNTsH49qstuEgQGUBRPnULNTsjo6oWlIp3t_zju-cBtNWUCqC4DC1LEbKd03_Z5ZWn2QzlCijdu9r-n-R_uDUpS9Xt9gSkZh9oqi3i3JhY_Hh1urgoAJQy1EGQE0nChVeSs55K991flDP6GWuLiFV4z-zh4cgUKvVXscoHrWDwWE")',
      }}
    >
      <h1 className="text-4xl md:text-5xl font-black text-white">
        About TechFix Academy
      </h1>
      <p className="mt-3 max-w-2xl text-white">
        Empowering individuals with the skills to excel in mobile device repair.
      </p>
    </section>
  );
}
