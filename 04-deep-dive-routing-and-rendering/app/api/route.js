export function GET(request){
  console.log(request)
  return new Response('hello');
}
// export function POST(request){}
// export function PATCH(request){}
// export function PUT(request){}
// export function DELETE(request){}