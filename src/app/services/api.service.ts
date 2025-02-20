import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { }

    async getPosts(): Promise<any[]> {
        const response = await this.http.get<any[]>(`${this.baseUrl}/posts`).toPromise();
        return response ?? [];
    }

    async getUsers(): Promise<any[]> {
        const response = await this.http.get<any[]>(`${this.baseUrl}/users`).toPromise();
        return response ?? [];
    }
}