interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Dr. Amelia Harper",
      role: "Lead Instructor",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQAR8oude3uq0kdhnP66VqxRVeaY0bCRLhsM55U8O-STsvZv6c6kOtCGSEVOktYoKtMXRhqBnqJBELJdZ9xhthOnk2yIgNzvyaCXrSn3qha0ULK_BAqJ67YKE0sC1aofF9Balaye3BEbnJrcI5lBRmU6YsaxcMBAkCiHt95s6I4PFx_8QEHifxv5TThEEXLjtQUUaVvZTQy74OBQHU3PyIsKWiPd_XdF0lEFINZMEIFUi6rknVVuitNgqC_bpoelUTgG5bdR7pi8E",
    },
    {
      name: "Mr. Ethan Carter",
      role: "Senior Technician",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC80OfB8Vdb7VMsh4wdxJQO0uzFVFaN3ueDI0wKIgQQKE-pMuXavXbsRTtZ2trVjJZQhRyVowmgjRPZj-EdHCR-3jtigfltMnGI4_4xLCschZxqCVo9S4MY11fJsIrpvb1v08vWiQBemkmX531ksqhWJMlGmD7WZZD2wIRIQsefYEtU3x6oqJFKqR9hvv9zwJQQ1Htb_P4lDRe-Ocyzgz3H2w0rcYP1J6IurKjb8EmZHKX9XOXTTCZflRLGxtwUyufKZnnrdAPRUVk",
    },
    {
      name: "Ms. Olivia Bennett",
      role: "Career Counselor",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZQizx4fmcDgxTUPy3K1SK_LMTZMDXte3iCiVoZOGShdsiDFBcxMIzKUsn7uGyJXgkW7razRF4_MfJ9SbkCmECEtRr_l2FzBBF5qmBNNVfylPYsUW88qPuiUPKKbF5Tfs7ReVZAqCUG8l4txR8HYi32jBpIc53jxwy1GHmPkCncJVtfBMtYn2djSqX5TC-BWdXysvr7VYzjx0wXqsoJi_yYGhFNwCTOFgfZrEhpwYxZGgAxhqT8YAd7NRQaxgrtzd7uR0VTArQbP8",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-6">
      <h2 className="text-[22px] font-bold text-[#111b0e] dark:text-white mb-6">
        Our Team
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-6">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div
              className="w-full aspect-square rounded-full bg-cover bg-center mx-auto mb-3"
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
            <p className="font-medium text-[#111b0e] dark:text-white">
              {member.name}
            </p>
            <p className="text-sm text-[#629550] dark:text-[#a1ee87]">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
