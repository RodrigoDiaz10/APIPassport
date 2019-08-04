<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Form;
class FormController extends Controller
{
    public function getForm(Request $request){
        $form = Form::get();
        return response()->json($form, 200);
    }
    public function postForm(Request $request){
        $data = $request->json()->all();
        $form = Form::create([
            'name_proyect'=>$data['name_proyect'],
             'members'=>$data['members'],
             'group_leader'=>$data['group_leader'],
             'link'=>$data['link'],
             'topic'=>$data['topic'],
             'description_proyect'=>$data['description_proyect'],
             'scope'=>$data['scope'],
             'tools'=>$data['tools'],
             'objetive'=>$data['objetive'],
             'level'=>$data['level'],
             'area'=>$data['area'],
             'state'=>$data['state'],
        ]);
        return response()->json($form, 201);
    }
    public function putForm(Request $request){
        $data = $request->json()->all();
        $form = Form::findOrFail($data['id']);
        $response = $form->update([
            'name_proyect'=>$data['name_proyect'],
            'members'=>$data['members'],
            'group_leader'=>$data['group_leader'],
            'link'=>$data['link'],
            'topic'=>$data['topic'],
            'description_proyect'=>$data['description_proyect'],
            'scope'=>$data['scope'],
            'tools'=>$data['tools'],
            'objetive'=>$data['objetive'],
            'level'=>$data['level'],
            'area'=>$data['area'],
            'state'=>$data['state'],
        ]);
        return response()->json($form, 201);
    }
    public function deleteForm(Request $request){
        $data = $request->json()->all();
        $form = Form::findOrFail($data['id']);
        $response = $form->delete();
        return response()->json($form, 201);
    }
}