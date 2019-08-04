<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
Use Exception;
use App\Teacher;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class TeacherController extends Controller
{
    public function getTeacher(Request $request){
        $teacher = Teacher::get();
        return response()->json($teacher, 200);
    }
    public function postTeacher(Request $request){
        $data = $request->json()->all();
        $teacher = Teacher::create([
            'state'=> $data['state'],
        ]);
        return response()->json($user, 201);
    }
    public function putTeacher(Request $request){
        $data = $request->json()->all();
        $teacher = Teacher::findOrFail($data['id']);
        $response = $teacher->update([
            'state'=> $data['state'],
        ]);
        return response()->json($teacher, 201);
    }
    public function deleteTeacher(Request $request){
        $data = $request->json()->all();
        $teacher = Teacher::findOrFail($data['id']);
        $response = $teacher->delete();
        return response()->json($teacher, 201);
    }
}