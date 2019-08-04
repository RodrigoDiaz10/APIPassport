<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
Use Exception;
use App\Qualifications;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class QualificationController extends Controller
{
    public function getQualification(Request $request){
        $qualification = Qualifications::get();
        return response()->json($qualification, 200);
    }
    public function postQualification(Request $request){
        $data = $request->json()->all();
        $qualification = Qualifications::create([
            'note1'=>$data['note1'],
            'note2'=>$data['note2'],
            'note3'=>$data['note3'],
            'noteEnd'=>$data['noteEnd'],
            'description'=>$data['description'],
            'state'=>$data['state'],
        ]);
        return response()->json($qualification, 201);
    }
    public function putQualification(Request $request){
        $data = $request->json()->all();
        $qualification = Qualifications::findOrFail($data['id']);
        $response = $qualification->update([
            'note1'=>$data['note1'],
            'note2'=>$data['note2'],
            'note3'=>$data['note3'],
            'noteEnd'=>$data['noteEnd'],
            'description'=>$data['description'],
            'state'=> $data['state'],
        ]);
        return response()->json($qualification, 201);
    }
    public function deleteQualification(Request $request){
        $data = $request->json()->all();
        $qualification = Qualifications::findOrFail($data['id']);
        $response = $qualification->delete();
        return response()->json($qualification, 201);
    }
}