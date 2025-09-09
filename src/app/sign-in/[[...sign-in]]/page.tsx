import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-[#111111] text-white font-inter min-h-screen flex items-center justify-center p-4">
      {/* Container with max width + horizontal padding on larger screens */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-2xl sm:text-3xl font-bold font-poppins inline-flex items-center gap-2 justify-center">
            <span className="text-[#E63946]">AR</span>
            <span>EDUCATION</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 px-2 sm:px-0">
            Sign in to continue your mobile repair journey
          </p>
        </div>

        {/* Sign In Card */}
        <div className="bg-[#1C1C1C] p-5 sm:p-8 rounded-2xl shadow-xl border border-gray-800">
          <div className="mb-5 sm:mb-6 text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 px-1">
              Sign in to access your courses and dashboard
            </p>
          </div>

          {/* Clerk SignIn with Enhanced Responsiveness */}
          <div className="w-full [&_.cl-formButtonPrimary]:w-full [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:px-3 [&_.cl-socialButtonsBlockButton]:py-2.5 [&_.cl-formFieldInput]:w-full [&_.cl-formFieldInput]:px-3 [&_.cl-formFieldInput]:py-2.5 [&_.cl-footerAction]:text-xs">
            <SignIn
              appearance={{
                variables: {
                  colorPrimary: "#E63946",
                  colorText: "white",
                  colorBackground: "#1C1C1C",
                  colorInputText: "white",
                  colorInputBackground: "#2A2A2A",
                  // colorInputBorder: "#3A3A3A",
                  // colorSocialButtonBackground: "#2A2A2A",
                },
                elements: {
                  // Social buttons: ensure text is white and padding scales
                  socialButtonsBlockButton:
                    "bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-gray-700 font-medium rounded-md w-full transition-colors text-sm sm:text-base py-2.5",
                  socialButtonsBlockButtonText: "text-white !important",

                  // Input fields: responsive padding
                  formFieldInput:
                    "bg-[#2A2A2A] border border-gray-700 text-white placeholder:text-gray-500 rounded-md w-full text-sm sm:text-base py-2.5",

                  // Primary button: full width, responsive padding
                  formButtonPrimary:
                    "bg-[#E63946] hover:bg-[#FF3B3F] text-white font-bold rounded-md w-full transition-colors text-sm sm:text-base py-2.5",

                  // Footer links: smaller text on mobile
                  footerActionLink:
                    "text-[#E63946] hover:text-[#FF3B3F] font-medium text-xs sm:text-sm",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
