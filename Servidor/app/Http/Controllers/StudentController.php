<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
Use Exception;
use App\Student;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class StudentController extends Controller
{
    public function getStudent(Request $request){
        $student = Student::get();
        return response()->json($student, 200);
    }
    public function postStudent(Request $request){
        $data = $request->json()->all();
        $student = Student::create([
            'state'=> $data['state'],
        ]);
        return response()->json($student, 201);
    }
    public function putStudent(Request $request){
        $data = $request->json()->all();
        $student = Student::findOrFail($data['id']);
        $response = $student->update([
            'state'=> $data['state'],
        ]);
        return response()->json($student, 201);
    }
    public function deleteStudent(Request $request){
        $data = $request->json()->all();
        $student = Student::findOrFail($data['id']);
        $response = $student->delete();
        return response()->json($student, 201);
    }
}