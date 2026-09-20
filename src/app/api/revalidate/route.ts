import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const secret = body.secret;
  const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const slug = body.slug;
  const type = body._type;

  if (!type) {
    return NextResponse.json({ message: "Missing _type" }, { status: 400 });
  }

  try {
    switch (type) {
      case "servicePage":
        if (slug) {
          revalidatePath(`/${slug}`);
          revalidatePath("/");
        }
        break;
      case "post":
        if (slug) {
          revalidatePath(`/blog/${slug}`);
          revalidatePath("/blog");
        }
        break;
      case "testimonial":
        revalidatePath("/testimonials");
        revalidatePath("/");
        break;
      case "faqItem":
        revalidatePath("/faq");
        revalidatePath("/");
        break;
      case "siteSettings":
        revalidatePath("/", "layout");
        break;
      case "person":
        revalidatePath("/about");
        revalidatePath("/");
        break;
      case "consultation":
        revalidatePath("/consultation");
        break;
      case "category":
        revalidatePath("/blog");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type, slug });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
