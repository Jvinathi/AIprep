import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard  from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  
  const user = await getCurrentUser();
  console.log("Current User ID:", user?.id);
   if (!user?.id) {
    return (
      <section className="text-center mt-10">
        <h2>Please login to view your interviews</h2>
      </section>
    );
  }

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    
    getLatestInterviews({ userId: user?.id! }),
  ]);
  console.log("User Interviews:", userInterviews);
console.log("All Interviews:", allInterview);


  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
                coverImage={interview.coverImage}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
  <h2>Take Interviews</h2>

  {/* ✅ New check for when query fails */}
  {!allInterview && (
    <p className="text-red-500">
      Interview data is still loading. Please refresh after a moment.
    </p>
  )}

  {/* ✅ Show interviews only if allInterview is not null */}
  {allInterview && (
    <div className="interviews-section">
      {hasUpcomingInterviews ? (
        allInterview.map((interview) => (
          <InterviewCard
            key={interview.id}
            userId={user?.id}
            id={interview.id}
            role={interview.role}
            type={interview.type}
            techstack={interview.techstack}
            createdAt={interview.createdAt}
            coverImage={interview.coverImage}
          />
        ))
      ) : (
        <p>There are no interviews available</p>
      )}
    </div>
  )}
</section>

    </>
  );
}

export default Home;
