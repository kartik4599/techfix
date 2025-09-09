import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-[#111111] text-white font-inter min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="container mx-auto max-w-md">
        {/* Header Logo - Mini version for context */}
        <div className="text-center mb-8">
          <div className="text-2xl font-bold font-poppins inline-flex items-center gap-2">
            <span className="text-[#E63946]">AR</span>
            <span>EDUCATION</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Sign in to continue your mobile repair journey
          </p>
        </div>

        {/* Sign In Card */}
        <div className="bg-[#1C1C1C] p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800">
          <div className="mb-6 text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Sign in to access your courses and dashboard
            </p>
          </div>

          {/* Clerk SignIn Component */}
          <div className="w-full">
            <SignIn
              appearance={{
                variables: {
                  colorPrimary: "#E63946",
                  colorText: "white",
                  colorBackground: "#1C1C1C",
                  colorInputText: "white",
                  colorInputBackground: "#2A2A2A",
                //   colorInputBorder: "#3A3A3A",
                },
                elements: {
                  rootBox: "w-full",
                  card: "bg-transparent border-0 shadow-none",
                  headerTitle: "text-white font-bold text-xl",
                  headerSubtitle: "text-gray-400",
                  formButtonPrimary:
                    "bg-[#E63946] hover:bg-[#FF3B3F] text-white font-bold rounded-md px-4 py-2 w-full transition-colors",
                  socialButtonsBlockButton:
                    "bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-gray-700 font-medium rounded-md px-4 py-2 w-full transition-colors",
                  socialButtonsBlockButtonText: "text-white !important",
                  formFieldInput:
                    "bg-[#2A2A2A] border border-gray-700 text-white placeholder:text-gray-500 rounded-md px-3 py-2 w-full",
                  footerActionLink:
                    "text-[#E63946] hover:text-[#FF3B3F] font-medium",
                },
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AR Education. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
