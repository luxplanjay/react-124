type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function LearPage(props: Props) {
  const { slug } = await props.params;
  console.log(slug[0], slug[1], slug[2]);

  return (
    <div>
      Learn page
      <p>GroupId {slug[0]}</p>
      <p>CourseId {slug[1]}</p>
      <p>ModuleId {slug[2]}</p>
    </div>
  );
}

// notes/1
// notes/2
// notes/3
// app/notes/[noteId]/page.tsx

// notes/1
// notes/2
// notes/3
// app/notes/[...slug]/page.tsx
// [3]

//
