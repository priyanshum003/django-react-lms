from django.urls import path
from .views import CourseListCreateView, CourseRetrieveUpdateDestroyView

urlpatterns = [
    path('', CourseListCreateView.as_view(), name='course-list-create'),
    path('<int:pk>/', CourseRetrieveUpdateDestroyView.as_view(), name='course-detail'),
    path('<int:pk>', CourseRetrieveUpdateDestroyView.as_view(), name='course-detail-no-slash'),
]

print("Courses URLs loaded:", urlpatterns)