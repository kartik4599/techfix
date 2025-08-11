interface CourseCardProps {
  image: string;
  title: string;
  description: string;
}

export default function CourseCard({
  image,
  title,
  description,
}: CourseCardProps) {
  return (
    <div className="p-4">
      <div className="flex flex-col @xl:flex-row rounded-xl overflow-hidden bg-white dark:bg-[#0f150d]">
        <div
          className="w-full aspect-video bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="flex flex-col justify-center p-4 gap-2">
          <p className="text-lg font-bold text-[#111b0e] dark:text-white">
            {title}
          </p>
          <p className="text-[#629550] dark:text-[#a1ee87]">{description}</p>
        </div>
      </div>
    </div>
  );
}
