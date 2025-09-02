// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CustomerStoriesPageSingle from '../../../page-components/customer-stories-single';

export async function generateMetadata({ params }){
  const resolvedParams = await params;
  
  if(resolvedParams.slug === "camera-fix"){
    const metadata = {
      title: 'Camera Repair Software in Action | MeMate Case Study',
      description: 'See how Camera Fix streamlined repairs, quoting, and team coordination using MeMate — real software results for electronics repair business owners.',
      openGraph: {
        title: 'Camera Repair Software in Action | MeMate Case Study',
        description: 'See how Camera Fix streamlined repairs, quoting, and team coordination using MeMate — real software results for electronics repair business owners.',
      },
    }
    return metadata;
//     <Helmet>
//     <title>Camera Repair Software in Action | MeMate Case Study</title>
//     <meta
//       name="description"
//       content="See how Camera Fix streamlined repairs, quoting, and team coordination using MeMate — real software results for electronics repair business owners."
//     />
//     <meta
//       property="og:title"
//       content="Camera Repair Software in Action | MeMate Case Study"
//     />
//     <meta
//       property="og:description"
//       content="See how Camera Fix streamlined repairs, quoting, and team coordination using MeMate — real software results for electronics repair business owners.
// "
//     />
//   </Helmet>
  }else if(resolvedParams.slug === "pro-vinyl"){
    const metadata = {
      title: 'Pro Vinyl Case Study | Car Wrap Business Software Success',
      description: 'Discover how Pro Vinyl streamlined their automotive wrapping operations using MeMate\'s business management software. Real-world success story for car wrap businesses.',
      openGraph: {
        title: 'Pro Vinyl Case Study | Car Wrap Business Software Success',
        description: 'Discover how Pro Vinyl streamlined their automotive wrapping operations using MeMate\'s business management software. Real-world success story for car wrap businesses.',
      },
    }
    return metadata;

// <Helmet>
//     <title>Pro Vinyl Case Study | Car Wrap Business Software Success</title>
//     <meta name="description" content="Discover how Pro Vinyl streamlined their automotive wrapping operations using MeMate's business management software. Real-world success story for car wrap businesses." />
//     <meta property="og:title" content="Pro Vinyl Case Study | Car Wrap Business Software Success" />
//       <meta property="og:description" content="Discover how Pro Vinyl streamlined their automotive wrapping operations using MeMate's business management software. Real-world success story for car wrap businesses.
//     " />
// </Helmet>
  }else if(resolvedParams.slug === "elite-life"){
    const metadata = {
      title: 'Elite Life Case Study | Software for Private Asset Management Clubs',
      description: 'See how Elite Life, an exclusive asset management club, uses MeMate to manage private clients, streamline internal operations, and deliver high-touch service.',
      openGraph: {
        title: 'Elite Life Case Study | Software for Private Asset Management Clubs',
        description: 'See how Elite Life, an exclusive asset management club, uses MeMate to manage private clients, streamline internal operations, and deliver high-touch service.',
      },

  //     <Helmet>
  //     <title>Elite Life Case Study | Software for Private Asset Management Clubs</title>
  //     <meta name="description" content="See how Elite Life, an exclusive asset management club, uses MeMate to manage private clients, streamline internal operations, and deliver high-touch service." />
  //     <meta property="og:title" content="Elite Life Case Study | Software for Private Asset Management Clubs" />
  //       <meta property="og:description" content="See how Elite Life, an exclusive asset management club, uses MeMate to manage private clients, streamline internal operations, and deliver high-touch service.
  //     " />
      // </Helmet>
    }
    return metadata;
  } else if(resolvedParams.slug === "boat-wizard"){
    const metadata = {
      title: 'Boat Wizard Case Study | Marine Service Business Software Success',
      description: 'Discover how Boat Wizard streamlined their marine service operations using MeMate\'s business management software. Real-world success story for marine service businesses.',
      openGraph: {
        title: 'Boat Wizard Case Study | Marine Service Business Software Success',
        description: 'Discover how Boat Wizard streamlined their marine service operations using MeMate\'s business management software. Real-world success story for marine service businesses.',
      },

    //     <Helmet>
    //     <title>Boat Wizard Case Study | Marine Service Business Software Success</title>
    //     <meta name="description" content="Discover how Boat Wizard streamlined their marine service operations using MeMate's business management software. Real-world success story for marine service businesses." />
    //     <meta property="og:title" content="Boat Wizard Case Study | Marine Service Business Software Success" />
    //       <meta property="og:description" content="Discover how Boat Wizard streamlined their marine service operations using MeMate's business management software. Real-world success story for marine service businesses.
    //     " />
    // </Helmet>
    }
    return metadata;
  } else if(resolvedParams.slug === "sorted-media"){
    const metadata = {
      title: 'Sorted Media Case Study | Photography Business Software',
      description: 'Discover how Sorted Media manages 40+ shoots a day with MeMate\'s software. Booking, scheduling, contractors — all streamlined for creative agencies.',
      openGraph: {
        title: 'Sorted Media Case Study | Photography Business Software',
        description: 'Discover how Sorted Media manages 40+ shoots a day with MeMate\'s software. Booking, scheduling, contractors — all streamlined for creative agencies.',
      }
  //     <Helmet>
  //     <title>Sorted Media Case Study | Photography Business Software</title>
  //     <meta name="description" content="Discover how Sorted Media manages 40+ shoots a day with MeMate’s software. Booking, scheduling, contractors — all streamlined for creative agencies." />
  //     <meta property="og:title" content="Sorted Media Case Study | Photography Business Software" />
  //       <meta property="og:description" content="Discover how Sorted Media manages 40+ shoots a day with MeMate’s software. Booking, scheduling, contractors — all streamlined for creative agencies.
  //     " />
  // </Helmet>
    }
    return metadata;
  }
}

export default async function CustomerStorySlug({ params }) {
  const resolvedParams = await params;
  console.log(resolvedParams)


  return (
    // <AppWrapper>
      <CustomerStoriesPageSingle params={resolvedParams} />
    // </AppWrapper>
  );
  
}
